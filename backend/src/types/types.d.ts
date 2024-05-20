export type TSignUpUser = {
  username: string
  email: string
  password: string
}

export type TSignInUser = {
  email: string
  password: string
}

export type TUserToken = {
  id: number
  email: string
  role: string
}
