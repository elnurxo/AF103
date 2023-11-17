import { useState } from "react";
import { postUser } from '../api/users';

const Register = () => {
  let[newUser, setNewUser] = useState({username:'',password:'',email:'',isAdmin:false});
  let[show,setShow] = useState(false);
  return (
    <>
      <button onClick={()=>{
        setShow(true);
      }}>Register</button>
      {show ? <form onSubmit={async(e)=>{
      e.preventDefault();
      setShow(false);
      console.log(newUser);
      postUser(newUser);
    }}>
      <input onChange={(e)=>{
        setNewUser({...newUser, username: e.target.value});
      }} value={newUser.username} placeholder="enter username" type="text"/>
      <input onChange={(e)=>{
        setNewUser({...newUser, email: e.target.value});
      }} value={newUser.email} placeholder="enter email" type="email"/>
      <input onChange={(e)=>{
        setNewUser({...newUser, password: e.target.value});
      }} value={newUser.password} placeholder="enter password" type="password"/>
      <div>
        <label htmlFor='isAdmin'>Is Admin?</label>
        <input onChange={(e)=>{
        setNewUser({...newUser, isAdmin: e.target.checked});
        }} value={newUser.isAdmin} id="isAdmin" type="checkbox"/>
      </div>
      <button type="submit">register</button>
      <button onClick={()=>{
        setShow(false);
        setNewUser({username:'',password:'',email:'',isAdmin:false});
      }} type="reset">cancel</button>
    </form> : null}
    </>
  )
}

export default Register