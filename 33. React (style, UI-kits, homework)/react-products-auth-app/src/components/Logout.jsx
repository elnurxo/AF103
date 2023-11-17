import { PropTypes } from 'prop-types';

const Logout = ({setUser}) => {
  return (
    <button onClick={()=>{
      setUser(null);
      localStorage.removeItem('user');
    }}>Logout</button>
  )
}

Logout.propTypes ={
  setUser: PropTypes.func
}

export default Logout