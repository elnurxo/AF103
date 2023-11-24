import { useMemo, useState } from "react";
import { initialValues } from "./data.js";

const MemoExample2 = () => {
  let[count,setCount] = useState(0);
  let[data] = useState(initialValues);

  const foundItem = useMemo(()=>{
    return data.find((x)=>x.isSelected)
  },[data]);

  return (
    <div>
        <button onClick={()=>{
            setCount(count+1);
        }}>increase</button>
        <span>{count}</span>
        <p>found: {foundItem.id}</p>
    </div>
  );
};

export default MemoExample2;
