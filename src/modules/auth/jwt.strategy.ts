import { UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-jwt'
import { AuthService } from './auth.service'
import { JwtDto } from './jwt.dto'

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super()
  }

  async validate(payload: JwtDto) {
    const user = await this.authService.verifyPayload(payload)

    if (!user) throw new UnauthorizedException('身份已过期')

    return user
  }
}
