const express = require("express");
const bodyParser = require('body-parser');
const crypto = require('crypto');
require('dotenv').config();
const fakeData = require('./db.js');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 3031;


//default url
app.get("/api", (req, res) => {
  res.send("Hello World!");
});

//PRODUCTS CRUD (CREATE READ UPDATE DELETE)

app.get('/api/products',(req,res)=>{
    if (fakeData.length==0) {
        res.status(204).send({
            message: 'empty array'
        })
    }
    else{
        res.status(200).send(fakeData);
    }
});

app.get('/api/products/:id',(req,res)=>{
    const {id} = req.params;
    const data = fakeData.find((x)=>x.id==id);
    if (data!==undefined) {
        res.status(200).send(data);
    }
    else{
        res.status(204).send('data not found!');
    }
})

app.delete('/api/products/:id',(req,res)=>{
    const {id} = req.params;
    const idx = fakeData.findIndex((x)=>x.id==id);
    if (idx===-1) {
        res.send({
            message: 'data not found!'
        })
    }   
    else{
        res.status(200).send({
            message: 'data deleted successfully',
            data: fakeData.splice(idx,1)
        })
    }
})

app.post('/api/products',(req,res)=>{
    const {title, price, description, category, image, rating} = req.body;

    const newProduct = {
        id: crypto.randomUUID(),
        title,
        price,
        description,
        category,
        image,
        rating
    }

    fakeData.push(newProduct)
    res.status(201).send({
        message: 'data posted successfully',
        data: newProduct
    });
})

app.put('/api/products/:id',(req,res)=>{
    const{id}= req.params;
    const {title, price, description, category, image, rating} = req.body;
    const data = fakeData.find((x)=>x.id==id);
    const updatedData = {
        id: data.id
    };
    if (title!==undefined) {
        updatedData.title = title;
    }
    if (price!==undefined) {
        updatedData.price = price
    }
    if (description!==undefined) {
        updatedData.description = description;
    }
    if (category!==undefined) {
        updatedData.category = category;
    }
    if (image!=undefined) {
        updatedData.image = image;
    }
    if (rating!==undefined) {
        updatedData.rating = rating;
    }

    const idx = fakeData.findIndex((x)=>x.id==id);
    // fakeData.splice(idx,1,updatedData);
    fakeData[idx] = updatedData;

    res.send({
        message:'data updated successfully!',
        data: updatedData
    })
})

app.patch('/api/products/:id',(req,res)=>{
    const{id}= req.params;
    const {title, price, description, category, image, rating} = req.body;
    const data = fakeData.find((x)=>x.id==id);

    if (title!==undefined) {
        data.title = title;
    }
    if (price!==undefined) {
        data.price = price;
    }
    if (category!==undefined) {
        data.category = category;
    }
    if (image!==undefined) {
        data.image = image;
    }
    if (description!==undefined) {
       data.description = description  
    }
    if (rating!==undefined) {
        data.rating = rating  
    }
    
    res.send({
        message: 'data updated successfully!',
        data
    })
})


app.listen(PORT, () => {
  console.log(`app listening on PORT:${PORT}`);
});
