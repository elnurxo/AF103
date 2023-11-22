import { useEffect, useState } from "react";

function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if(savedValue) return savedValue;

    if(initialValue instanceof Function) return initialValue();

    return initialValue;
}

export const useLocalStorage = function (key, initialValue) {
  let [storage, setStorage] = useState(()=>{
    return getSavedValue(key, initialValue);
  });

  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(storage));
  },[key, storage]);

  return [storage, setStorage];
};
