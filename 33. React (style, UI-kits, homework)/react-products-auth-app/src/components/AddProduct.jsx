import { useState } from "react"
import { postProduct } from "../api/products";
import { PropTypes } from 'prop-types';

const AddProduct = ({setProducts, products}) => {
    let[show,setShow] = useState(false);
    let[newProduct, setNewProduct] = useState({name:'',price:'',discountPercentage:''});
  return (
    <>
        <button onClick={()=>{
            setShow(true);
        }}>Add Product</button>
        {show ?    <form onSubmit={async(e)=>{
            e.preventDefault();
            let addedProduct = await postProduct(newProduct);
            setProducts([...products, addedProduct]);
            setNewProduct({name:'',price:'',discountPercentage:''});
        }}>
        <input onChange={(e)=>{
            setNewProduct({...newProduct, name: e.target.value})
        }} value={newProduct.name} placeholder="name" type="text" required/>
        <input onChange={(e)=>{
            setNewProduct({...newProduct, price: e.target.value})
        }} value={newProduct.price} placeholder="price" type="number" min={0}/>
        <input onChange={(e)=>{
            setNewProduct({...newProduct, discountPercentage: e.target.value})
        }} value={newProduct.discountPercentage} placeholder="discount percentage" type="number" min={0} max={100}/>
        <button type="submit">add</button>
        <button onClick={()=>{
            setShow(false);
        }} type="reset">cancel</button>
    </form> : null}
    </>
  )
}

AddProduct.propTypes = { 
    setProducts: PropTypes.func, 
    products: PropTypes.array
}

export default AddProduct