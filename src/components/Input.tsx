import React from 'react'

type InputProps = {
    onChange: (event:React.ChangeEvent<HTMLInputElement>)=>void,
    value?: string,
    placeholder?: string
}

const Input = (props: InputProps) => {
  return (
    <input onChange={props.onChange} value={props.value} placeholder={props.placeholder} type="text" />
  )
}

export default Input