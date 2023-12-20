import { FormEvent, useState } from 'react';
import './App.css'
// import { ChangeEvent, useRef, useState } from 'react'
// import Counter from './Counter'
// import Decrement from './Decrement'
// import Increment from './Increment'
// import Reset from './Reset'
// import Select from 'react-select';
// import Markdown from 'react-markdown'
import MarkdownEditor from '@uiw/react-markdown-editor';
import Markdown from 'react-markdown'

// const colourOptions = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]


function App() {
  let [text,setText] = useState<string>("");
let[items, setItems] = useState<string[]>([]);
  // const[counter,setCounter] = useState<number>(0);
  // const nameRef = useRef<HTMLInputElement>(null);
  // const selectRef = useRef<HTMLSelectElement>(null);
  // const [isClearable] = useState<boolean>(true);
  // const [isSearchable] = useState<boolean>(true);
  // const[text,setText] = useState<string>("");
  
  return (
   <>
    {/* <h1>Counter with typescript</h1>
    <Decrement setCounter={setCounter}/>
    <Counter counter={counter}/>
    <Increment setCounter={setCounter}/>
    <hr />
    <Reset setCounter={setCounter}/>
    <hr />
    <h4>Ref hook</h4>
    <input ref={nameRef} type="text" placeholder='text sum' />
    <select ref={selectRef} name="" id=""></select>
    <hr />
    <Select
    defaultValue={[colourOptions[2], colourOptions[3]]}
    isMulti
    name="colors"
    options={colourOptions}
    isSearchable={isSearchable}
    isClearable={isClearable}
    className="basic-multi-select"
    classNamePrefix="select"
  />
  <hr />
  <h4>Mark Down</h4>
  <textarea cols={40} rows={10} onChange={(e: ChangeEvent<HTMLTextAreaElement>)=>{
    setText(e.target.value);
  }}   placeholder='markdown'/>
  <Markdown>{text}</Markdown> */}

  <h3>Create Blog</h3>
  <form onSubmit={(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setItems([...items, text]);
    setText("");
  }}>
  <MarkdownEditor
      value={text}
      onChange={(value) => {
        setText(value);
      }}
    />
    <button type='submit'>add</button>
  </form>
  <hr />
    {
      items.map((item,idx)=>{
        return <Markdown key={idx}>{item}</Markdown>;
      })
    }
   </>
  )
}

export default App
