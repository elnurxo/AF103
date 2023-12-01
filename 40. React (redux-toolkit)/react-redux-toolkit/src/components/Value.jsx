import { useSelector } from "react-redux"

const Value = () => {
  const counter = useSelector((state)=>state.counter.value);
  return (
    <span>{counter}</span>
  )
}

export default Value