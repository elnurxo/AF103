
interface CounterProps {
    counter: number
}
const Counter = ({counter}:CounterProps) => {
  return (
    <span>{counter}</span>
  )
}

export default Counter