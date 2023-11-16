import { PropTypes } from "prop-types";

// eslint-disable-next-line no-unused-vars
const Courier = ({ id, statusCode }) => {
  console.log(statusCode);
  return <div>Courier</div>;
};

Courier.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  statusCode: PropTypes.oneOf(['accepted','rejected','delivered']),
};

export default Courier;
