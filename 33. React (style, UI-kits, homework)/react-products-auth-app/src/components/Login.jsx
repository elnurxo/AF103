import { useState } from "react";
import {PropTypes } from 'prop-types';
import { getAllUsers } from "../api/users";

const Login = ({setUser}) => {
  let [show, setShow] = useState(false);
  let[currentUser, setCurrentUser] = useState({username:'',password:''});
  return <>
    <button onClick={()=>{
      setShow(true);
    }}>Login</button>
    {show ? <form onSubmit={(e)=>{
      e.preventDefault();
      getAllUsers().then((res)=>{
        console.log('test login');
        let found = res.find((x)=>x.username===currentUser.username && x.password===currentUser.password);

        if (found) {
          setUser(found);
          localStorage.setItem('user',JSON.stringify({id:found.id, isAdmin:found.isAdmin}))
        }
        else{
          window.alert('username or password is incorrect!');
        }
      })
    }}>
      <input value={currentUser.username} onChange={(e)=>{
        setCurrentUser({...currentUser, username: e.target.value})
      }} placeholder="enter username" type="text"/>
      <input value={currentUser.password} onChange={(e)=>{
        setCurrentUser({...currentUser, password: e.target.value})
      }} placeholder="enter password" type="password"/>
      <button type="submit">login</button>
      <button onClick={()=>{
        setShow(false);
        setCurrentUser({username:'',password:''});
      }} type="reset">cancel</button>
    </form> : null}
    </>
};

Login.propTypes = {
  setUser: PropTypes.func
}

export default Login;
