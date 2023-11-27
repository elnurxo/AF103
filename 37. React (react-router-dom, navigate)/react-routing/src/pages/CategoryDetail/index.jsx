import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getCategoryByID } from "../../services/api/requests/categoryRequests";


const CategoryDetail = () => {
  const {id} = useParams();
  let[category, setCategory] = useState({});
  useEffect(()=>{
    getCategoryByID(id).then((response)=>{
        setCategory(response);
    })
  },[id]);
  
  return (
    <>
        <h1>Detail Page</h1>
        <h2>ID: {category.id}</h2>
        <h2>NAME: {category.name}</h2>
        <h2>DESCRIPTION: {category.description}</h2>
    </>
  )
}

export default CategoryDetail