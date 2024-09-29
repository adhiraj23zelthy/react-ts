import React from 'react'
type NameProps = {
    first: string,
    last : string
}
type NameListProps = {
    names : NameProps[]
}
const PersonList = (props:NameListProps) => {
  return (
    <div>
        {props.names.map((name:NameProps)=>(
            <h3>{name.first} {name.last}</h3>
        ))}
    </div>
  )
}

export default PersonList