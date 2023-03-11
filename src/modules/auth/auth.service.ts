import { InjectRepository } from '@nestjs/typeorm'
import { JwtService } from '@nestjs/jwt'
import { PlayerEntity } from '../player/player.entity'
import { PlayerService } from '../player/player.service'
import { JwtDto } from './jwt.dto'

export class AuthService {
  constructor(
    @InjectRepository(PlayerEntity)
    private readonly playerService: PlayerService,
    private readonly jwtService: JwtService,
  ) {}

  async verifyPayload(dto: JwtDto) {
    const user = await this.playerService.findById(dto.userId)

    return this.jwtService.sign(user)
  }
}
