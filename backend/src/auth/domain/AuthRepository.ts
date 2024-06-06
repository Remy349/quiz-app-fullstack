export interface IAuthRepository {
  signIn(email: string, password: string): Promise<string>
}
