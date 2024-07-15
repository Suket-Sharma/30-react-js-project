import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const items = ["item1","item2","item3","item4","item5","item6","item7","item8","item9","item10"];

  return (
    <>
    <ol>
      {items.map((item,index)=>{
        return <li key={index}>{item}</li>
      })}
    </ol>
      
    </>
  )
}

export default App
