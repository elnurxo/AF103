import { useEffect, useState } from "react";

export const useFetch = function(url, method) {
    let[data,setData] = useState([]);
    let[loading,setLoading] = useState(true);
    let[error,setError] = useState(false);

    useEffect(()=>{
        fetch(url,{
            method: method
        })
        .then((res)=>{
            if (!res.ok) {
                throw new Error('error happened')
            }
            return res.json();
        }).then((data)=>{
            setData(data);
        }).catch((err)=>{
            setError(err);
        }).finally(()=>{
            setLoading(false);
        })
    },[url, method]);

    return {data, loading, error};
}