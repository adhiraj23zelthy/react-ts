import React from 'react'
type BtnProps = {
    onClick : (event: React.MouseEvent<HTMLButtonElement>)=>void
}
const Button = (props:BtnProps) => {
  return (
    <button {...props}>Click</button>
  )
}

export default Button