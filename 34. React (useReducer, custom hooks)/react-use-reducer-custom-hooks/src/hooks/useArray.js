import { useState } from "react";

export const useArray = function (defaultArray) {
  let [arr, setArr] = useState(defaultArray);

  function push(newItem) {
    return setArr(a => [...a, newItem]);
  }
  function sortDes() {
    return setArr([...arr.sort((x, y) => y - x)]);
  }
  function sortInc() {
    return setArr([...arr.sort((x, y) => x - y)]);
  }
  function filter(callback) {
    setArr(a=>a.filter(callback));
  }
  function remove(index) {
    setArr(a=>[...a.slice(0,index),...a.slice(index+1,a.length-1)])
  }
  function clear() {
    setArr([]);
  }
  return { arr, push, sortDes, sortInc, filter, remove, clear };
};
