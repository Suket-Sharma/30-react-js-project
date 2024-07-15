import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response)=>response.json())
    .then((json)=>setData(json))
  })

  return (
    <>
      {
        data ? 
        ( 
          <div>
            <h1>Title :{data.title}</h1>
            <h1>Body : {data.body}</h1>
          </div>
         ) : ( 
          <h1>Loading...</h1>
         )

      }
    </>
  )
}

export default App
