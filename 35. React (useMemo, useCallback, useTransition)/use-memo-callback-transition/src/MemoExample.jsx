import { useState, useMemo, useEffect } from "react";

const MemoExample = () => {
  let [num, setNum] = useState(0);
  let[dark,setDark] = useState(false);


  const handleChange = (e)=> {
    setNum(e.target.value);
  }

  const doubleNum = useMemo(()=>{
    return slowFunc(num)
  },[num]);
  
  const themeStyle = useMemo(()=>{
    return {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
     }
  },[dark]);

  useEffect(()=>{
    console.log('theme changed');
  },[themeStyle]);

  return (
    <>
      <input onChange={handleChange} placeholder="enter number" type="number" />
      <button onClick={()=>{
        setDark((currentTheme)=>!currentTheme);
      }}>change theme</button>
      <div style={themeStyle}>{doubleNum}</div>
    </>
  );
};

function slowFunc(num) {
  // eslint-disable-next-line no-empty
  for (let i = 0; i < 1000000000; i++) {}

  return num * 2;
}

export default MemoExample;
