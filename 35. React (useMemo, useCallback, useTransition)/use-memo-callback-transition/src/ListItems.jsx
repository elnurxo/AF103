import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const ListItems = ({ getItems }) => {
  
  let[items,setItems] = useState([]);
  useEffect(()=>{
    setItems(getItems());
    console.log('updating items');
  },[getItems]);
  return items.map((item,idx)=> <div key={idx}>{item}</div>)
};

export default ListItems;
