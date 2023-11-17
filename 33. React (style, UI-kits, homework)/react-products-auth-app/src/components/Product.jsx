import { PropTypes } from "prop-types";
import { deleteProductByID } from "../api/products";
import { putUserByID } from "../api/users";
import EditProduct from "./EditProduct";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Product = ({ setUser,user, product, setProducts, products }) => {
  let [show, setShow] = useState(false);
  return (
    <li>
      <span>
        {product.name},{" "}
        {(
          product.price -
          (product.price * product.discountPercentage) / 100
        ).toFixed(2)}
      </span>
      {user.isAdmin ? (
        <>
          <button
            onClick={() => {
              setShow(true);
            }}
          >
            edit
          </button>
          {show ? (
            <EditProduct
              products={products}
              setProducts={setProducts}
              product={product}
              setShow={setShow}
            />
          ) : null}
          <button
            onClick={() => {
              deleteProductByID(product.id);
              let updatedProducts = products.filter((x) => x.id !== product.id);
              setProducts([...updatedProducts]);
            }}
          >
            delete
          </button>
        </>
      ) : (
        <>
          <button
            style={{backgroundColor:user.basketItems.find((x)=>x.productID==product.id) ? "red" : "transparent"}}
            onClick={async() => {
              if (user.basketItems.find((x) => x.productID == product.id)) {
                (user.basketItems.find((x)=>x.productID==product.id)).quantity++;
                let updatedUser = await putUserByID(user.id, user);
                setUser(updatedUser);
              } else {
                user.basketItems.push({ id: uuidv4(),productID: product.id, quantity: 1 });
                let updatedUser = await putUserByID(user.id, user);
                setUser(updatedUser);
              }
            }}
          >
            {user.basketItems.find((x)=>x.productID===product.id) ?  `added ${user.basketItems.find((x)=>x.productID===product.id).quantity}` : "basket"}
          </button>
        </>
      )}
    </li>
  );
};

Product.propTypes = {
  product: PropTypes.object,
  user: PropTypes.object,
  setBasket: PropTypes.func,
  basket: PropTypes.array,
  setProducts: PropTypes.func,
  products: PropTypes.array,
  setUser: PropTypes.func
};

export default Product;
