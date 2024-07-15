import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input,setInput] = useState('');
  const [todos,setTodos] = useState([]);

  const addTodo=()=>{
    if(input.trim()!==''){
      setTodos([...todos,input]);
      setInput('');
    }
  }

  const removeTodo=(index)=>{
    const updateTodos = todos.filter((_,i)=>i!==index);
    setTodos(updateTodos);
  }


  return (
    <>
    <input type="text" onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo,index)=>{
          return <li key={index}>{todo}<button onClick={()=>removeTodo(index)}>Remove</button></li>
          
        })}
      </ul>
        
    </>
  )
}

export default App
