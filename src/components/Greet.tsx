import React from 'react'

type myProps = {
    name: string, 
    messageCount: number,
    isLoggedIn: boolean
}
const Greet = (props: myProps) => {
  return (
    <div>
        {
            props.isLoggedIn ? (<h1>Hello {props.name}, {props.messageCount} unread messages</h1>) : (<h1>Login first please</h1>)
        }
    </div>
    
  )
}

export default Greet