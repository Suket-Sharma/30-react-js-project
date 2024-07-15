import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [value, setValue] = useState('');

  return (
    <>
       < input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
       <p>Display here :-{value}</p> 
    </>
  )
}

export default App
