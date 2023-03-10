import { JwtDto } from './jwt.dto'

export class AuthService {
  constructor() {}
  async verifyPayload(userId: JwtDto) {
    const user = { userId }
  }
}
