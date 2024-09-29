import React, { ReactNode } from 'react'
type OscarProps = {
    children: ReactNode
}
const Oscar = (props:OscarProps) => {
  return (<>
    <div>Oscar goes to Leonardo DiCaprio!</div>
    <div>{props.children}</div>
    </>
  )
}

export default Oscar