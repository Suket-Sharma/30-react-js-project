import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isToggle, setToggles] = useState(false);
  const toggleHandler =()=>{
    setToggles(!isToggle);
  }

  return (
    <>
      <label>
        < input type='checkbox' onChange={toggleHandler}/>

      </label>
      <p>{isToggle?"on":"off"}</p>
    </>
  )
}

export default App
