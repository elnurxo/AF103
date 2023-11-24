import { useCallback, useState } from "react";
import ListItems from "./ListItems";

const CallbackExample = () => {
  let [num, setNum] = useState(0);
  let [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [num, num + 1, num + 2];
  },[num]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={themeStyles}>
      <input
        value={num}
        onChange={(e)=>{
            setNum(parseInt(e.target.value));
        }}
        placeholder="enter number"
        type="number"
      />
      <button
        onClick={() => {
          setDark((currentTheme) => !currentTheme);
        }}
      >
        change theme
      </button>
      <ListItems getItems={getItems} />
    </div>
  );
};

export default CallbackExample;
