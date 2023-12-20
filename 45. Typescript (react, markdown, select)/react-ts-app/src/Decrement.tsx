import React from "react"

type DecrementProps = {
  setCounter: React.Dispatch<React.SetStateAction<number>>
}

const Decrement = ({setCounter}:DecrementProps) => {

  return (
    <button onClick={()=>setCounter(prevValue=> prevValue-1)}>decrement</button>
  )
}

export default Decrement