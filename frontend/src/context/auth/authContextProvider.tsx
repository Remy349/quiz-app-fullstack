import { ReactNode, useState } from 'react'
import { AuthContext, IAuthContextProps } from './authContext'

interface IAuthContextProviderProps {
  children: ReactNode
}

export const AuthContextProvider = ({
  children,
}: IAuthContextProviderProps) => {
  const [token, setToken] = useState<string | null>(null)

  const signIn = (tokenData: string) => {
    setToken(tokenData)

    localStorage.setItem('token', tokenData)
  }

  const logout = () => {
    setToken(null)

    localStorage.removeItem('token')
  }

  const contextValue: IAuthContextProps = {
    token,
    signIn,
    logout,
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
