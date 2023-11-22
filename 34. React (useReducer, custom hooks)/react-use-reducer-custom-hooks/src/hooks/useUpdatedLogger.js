import { useEffect } from "react"

export const useUpdatedLogger = function(value) {
    useEffect(()=>{
        console.log(value);
    },[value]);
}