import { PropTypes } from "prop-types";

const Products = ({ children }) => {
  return <ul>{children}</ul>;
};

Products.propTypes = {
  children: PropTypes.node
}

export default Products;
