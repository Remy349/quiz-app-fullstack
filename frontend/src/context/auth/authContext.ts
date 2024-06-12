import { createContext } from 'react'

export interface IUserSession {
  id: string
  email: string
  role: 'USER' | 'ADMIN'
}

export interface IAuthContextProps {
  currentUser: IUserSession | null
  token: string | null
  setCurrentUserData: (data: IUserSession) => void
  signInUser: (tokenData: string) => void
  logoutUser: () => void
}

export const AuthContext = createContext<IAuthContextProps | null>(null)
