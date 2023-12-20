import React from "react"

interface ResetProps {
    setCounter: React.Dispatch<React.SetStateAction<number>>
}

const Reset: React.FC<ResetProps> = ({setCounter}) => {
  return (
    <button onClick={()=>setCounter(0)}>reset</button>
  )
}

export default Reset