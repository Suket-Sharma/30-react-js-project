import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('yellow');

  

  const changeColor=()=>{
    const newColor = backgroundColor==='yellow'?'red':'yellow';
    setBackgroundColor(newColor);
  }

  return (
    <>
      <div onClick={changeColor}
        style={{
          backgroundColor,
          height:'150px',
          width:'150px',
          cursor:'pointer'
        }}
      >
        Change Color
      </div>
    </>
  )
}

export default App
