import { PropTypes } from "prop-types";
import { useState } from "react";
import { putProductByID } from "../api/products";

const EditProduct = ({ setShow, product, products, setProducts }) => {
  let [updatingPro, setUpdatingPro] = useState({
    name: product.name,
    price: product.price,
    discountPercentage: product.discountPercentage,
  });
  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      putProductByID(product.id, updatingPro);
      let currentUpdating = products.find((x)=>x.id===product.id);
      currentUpdating.name = updatingPro.name;
      currentUpdating.price = updatingPro.price;
      currentUpdating.discountPercentage = updatingPro.discountPercentage;
      setProducts([...products]);
      setShow(false);
    }}>
      <input onChange={(e)=>{
        setUpdatingPro({...updatingPro, name: e.target.value})
      }} value={updatingPro.name} placeholder="product name" type="text" required />
      <input onChange={(e)=>{
        setUpdatingPro({...updatingPro, price: e.target.value})
      }} value={updatingPro.price} placeholder="product price" type="number" required min={0} />
      <input onChange={(e)=>{
        setUpdatingPro({...updatingPro, discountPercentage: e.target.value})
      }} value={updatingPro.discountPercentage}
        placeholder="product discount"
        type="number"
        required
        min={0}
        max={100}
      />
      <button type="submit">edit</button>
      <button
        onClick={() => {
          setShow(false);
        }}
        type="reset"
      >
        cancel
      </button>
    </form>
  );
};

EditProduct.propTypes = {
  setShow: PropTypes.func,
  product: PropTypes.object,
  setProducts: PropTypes.func,
  products: PropTypes.array
};

export default EditProduct;
