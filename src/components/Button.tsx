import React from 'react'
type BtnProps = {
    onClick : ()=>void
}
const Button = (props:BtnProps) => {
  return (
    <button {...props}>Click</button>
  )
}

export default Button