import './App.css'
import Hello from './Hello';
import List from './List';
import ListItem from './ListItem';

function App() {
  let num = 3;
  //props - properties
  function greet(name) {
    console.log('hello '+name);
  }
  return (
    <>
      <Hello func={greet} person={{name:'Eldar',surname:'Aliyev',age:21}} hobbies={['basketball','music']}/>
      <Hello func={greet} person={{name:'Ramal',surname:'Veliyev',age:20}} hobbies={['football','video games']}/>
      
      {/* <List>
        <ListItem num={num}/>
        <ListItem num={4}/>
        <ListItem num={7}/>
      </List> */}
    </>
  )
}

export default App
