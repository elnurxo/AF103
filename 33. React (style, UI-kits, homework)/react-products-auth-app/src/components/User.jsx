import { PropTypes } from "prop-types";
const User = ({user,products}) => {
  return (
    <div>
      <h5><b>email: </b> {user.email}</h5>
      <p>Basket Items</p>
      <ul>
        {user.basketItems && user.basketItems.map((basketItem)=>{
          let product = products.find((x)=>x.id==basketItem.productID);
          return <li key={basketItem.id}> {product?.name}, {basketItem.quantity}</li>
        })}
      </ul>
      <h4>
        <b>username: </b> <span style={{color: user.isAdmin ? "red" : "black"}}>{user.username}</span>
      </h4>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
  products: PropTypes.array
};

export default User;
