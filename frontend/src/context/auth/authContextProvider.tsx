import { ReactNode, useEffect, useState } from 'react'
import { AuthContext, IAuthContextProps, IUserSession } from './authContext'
import axios, { AxiosError } from 'axios'
import { API_URL } from '@/utils/consts'

interface IAuthContextProviderProps {
  children: ReactNode
}

export const AuthContextProvider = ({
  children,
}: IAuthContextProviderProps) => {
  const [token, setToken] = useState<string | null>(null)
  const [currentUser, setCurrentUser] = useState<IUserSession | null>(null)

  const setCurrentUserData = (data: IUserSession) => {
    setCurrentUser(data)
  }

  const signInUser = (tokenData: string) => {
    setToken(tokenData)

    localStorage.setItem('token', tokenData)
  }

  const logoutUser = () => {
    setToken(null)
    setCurrentUser(null)

    localStorage.removeItem('token')
  }

  const contextValue: IAuthContextProps = {
    currentUser,
    token,
    setCurrentUserData,
    signInUser,
    logoutUser,
  }

  useEffect(() => {
    const savedToken = localStorage.getItem('token')

    if (savedToken) {
      setToken(savedToken)

      const getProfile = async () => {
        try {
          const response = await axios.get(`${API_URL}/users/profile`, {
            headers: {
              Authorization: `Bearer ${savedToken}`,
            },
          })

          const { id, email, role } = response.data

          setCurrentUser({ id, email, role })
        } catch (error) {
          if (error instanceof AxiosError) {
            const message = error.response?.data.message

            if (message === 'Authentication failed. Token expired') {
              logoutUser()
            }
          }
        }
      }

      getProfile()
    }
  }, [])

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
