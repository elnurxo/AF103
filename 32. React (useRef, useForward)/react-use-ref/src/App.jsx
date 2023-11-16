import './App.css'
import { useEffect, useRef, useState } from 'react';
// import Input from './components/Input';
// import Button from './components/Button';
// import Courier from './components/Courier';

function App() {
  // let inputRef = useRef();
  let[user,setUser] = useState(null);
  let[products, setProducts] = useState([]);

  if (user) {
    useEffect(()=>{
      
    },[])
  }
  return (
    <>
      {user ? <>
        <Products>
            {products && products.map((pro)=>{
              return <Product />
            })}
        </Products>
        <User/>
      </> : <Login/>
      
      </>}
      {/* <Input ref={inputRef} placeholder='search' type='text'/>
      <Button inputRef={inputRef}/>
      <Courier statusCode={'accepted'} id={'12'}/> */}
    </>
  )
}

export default App
