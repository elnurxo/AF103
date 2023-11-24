import { useState, useTransition } from "react";

const TransitionExample = () => {
  let [list, setList] = useState([]);
  let [name, setName] = useState("");
  let [isPending, startTransition] = useTransition();
  let arr = [];
  return (
    <div>
      <div>input value: {name}</div>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          startTransition(() => {
            setList([]);
            for (let i = 0; i < 20000; i++) {
              arr.push(e.target.value);
            }
            setList(arr);
          });
        }}
        placeholder="search"
      />

      <hr />
      {isPending ? (
        "loading..."
      ) : (
        <ul>
          {list &&
            list.map((item, idx) => {
              return <li key={idx}>{item}</li>;
            })}
        </ul>
      )}
    </div>
  );
};

export default TransitionExample;
