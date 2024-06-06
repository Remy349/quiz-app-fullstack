import { IAuthRepository } from '../domain/AuthRepository'

interface ISignInData {
  email: string
  password: string
}

export class SignInUseCase {
  private authRepository: IAuthRepository

  constructor(authRepository: IAuthRepository) {
    this.authRepository = authRepository
  }

  async execute(data: ISignInData): Promise<string> {
    const { email, password } = data

    return this.authRepository.signIn(email, password)
  }
}
