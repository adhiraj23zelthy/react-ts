import React, { useState } from 'react'
type AuthUserProps = {
    name: string,
    email : string
}
const User = () => {
    const [user,setUser] = useState<AuthUserProps | null>(null)
    const handleLogin = () =>{
        setUser({
            name:'Adhiraj',
            email: 'adhiraj@kar.com'
        })
    }
    const handleLogout = () =>{
        setUser(null)
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        {
            user && <div>
                <div>User name is {user.name}</div>
                <div>User email is {user.email}</div>
            </div>
        }
        
    </div>
  )
}

export default User