export class CustomApiError extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly message: string
  ) {
    super(message)
  }

  static badRequestError(message: string) {
    return new CustomApiError(400, message)
  }

  static notFoundError(message: string) {
    return new CustomApiError(404, message)
  }

  static conflictError(message: string) {
    return new CustomApiError(409, message)
  }

  static internalServerError(message: string = 'Internal server error') {
    return new CustomApiError(500, message)
  }
}
