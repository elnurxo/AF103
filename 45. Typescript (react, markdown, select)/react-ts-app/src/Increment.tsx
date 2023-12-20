import React from "react"

interface IncrementProps {
  setCounter: React.Dispatch<React.SetStateAction<number>>
}

const Increment = ({setCounter}:IncrementProps) => {

  return (
    <button onClick={()=>setCounter(prevValue=> prevValue+1)}>increment</button>
  )
}

export default Increment