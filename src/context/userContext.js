import React, { createContext } from 'react'

const AuthContext =createContext();


const userContext = ({children}) => {
    const user = {}
  return (
    <AuthContext.Provider value={user}>
        
    </AuthContext.Provider>
  )
}

export default userContext