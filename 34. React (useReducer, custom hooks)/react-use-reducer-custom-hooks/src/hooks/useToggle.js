import { useState } from "react"


export const useToggle = function(defaultValue) {
    let[value, setValue] = useState(defaultValue);

    function toggleValue(value) {
       setValue((currentValue)=>{
        return typeof value === 'boolean' ? value : !currentValue;
       })
    }

    return [value, toggleValue]
}