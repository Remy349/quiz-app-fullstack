import { createContext } from 'react'

export interface IAuthContextProps {
  token: string | null
  signIn: (tokenData: string) => void
  logout: () => void
}

export const AuthContext = createContext<IAuthContextProps | null>(null)
