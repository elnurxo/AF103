import { useEffect, useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import User from "./components/User";
import Logout from "./components/Logout";
import Products from "./components/Products";
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";
import { getAllProducts } from "./api/products";
import "./App.css";
import { getUserByID } from "./api/users";

function App() {
  let [products, setProducts] = useState([]);
  let [basket, setBasket] = useState([]);
  let [user, setUser] = useState(null);
  if (JSON.parse(localStorage.getItem("basket"))) {
    setBasket(JSON.parse(localStorage.getItem("basket")));
  }
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      let id = JSON.parse(localStorage.getItem("user")).id;
      getUserByID(id).then((res) => {
        setUser(res);
      });
      getAllProducts().then((res) => {
        setProducts(res);
      });
    }
  }, []);
  return (
    <>
      <h2>React Products, Auth App, Local Storage, Basket, Admin</h2>
      {user ? (
        <>
          <User user={user} products={products} />
          {user.isAdmin && (
            <AddProduct products={products} setProducts={setProducts} />
          )}
          <Products>
            {products &&
              products.map((product, idx) => {
                return (
                  <Product
                    user={user}
                    basket={basket}
                    setBasket={setBasket}
                    product={product}
                    products={products}
                    setProducts={setProducts}
                    setUser={setUser}
                    key={idx}
                  />
                );
              })}
          </Products>
          <h4>Log Out</h4>
          <Logout setUser={setUser} />
        </>
      ) : (
        <>
          <Login setProducts={setProducts} setUser={setUser} />
          <Register />
        </>
      )}
    </>
  );
}

export default App;
