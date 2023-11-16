import { forwardRef } from "react"

const Input = forwardRef(function Input(props, ref){
    return (
      <input ref={ref} placeholder='search' type='text'/>
    )
  })


export default Input