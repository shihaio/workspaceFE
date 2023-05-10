import { createContext, useState } from 'react'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    email: localStorage.getItem('email') || '',
    userId: localStorage.getItem('userId') || '',
    profileURL: localStorage.getItem('profileURL') || '',
    role: localStorage.getItem('role') || '',
    accessToken: localStorage.getItem('accessToken') || '',
    is_admin: localStorage.getItem('is_admin') || '',
  })

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
