import React from 'react'

const Props = ({props,todo}) => {
  return (
    <div>
      <h1>Name: {props}</h1>
      <h3>Message: {todo}</h3>
    </div>
  )
}

export default Props;
