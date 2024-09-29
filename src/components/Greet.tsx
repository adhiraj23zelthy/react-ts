import React from 'react'

type myProps = {
    name: string
}
const Greet = (props: myProps) => {
  return (
    <h1>Hello {props.name}</h1>
  )
}

export default Greet