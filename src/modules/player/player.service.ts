import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { compareSync } from 'bcrypt'
import { Repository } from 'typeorm'
import { PlayerDto } from './player.dto'
import { PlayerEntity } from './player.entity'

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(PlayerEntity)
    private readonly playerRepository: Repository<PlayerEntity>,
  ) {}

  getPlayerDetail(): string {
    return 'Hello World!'
  }

  async createUser(dto: PlayerDto) {
    const {} = dto
  }

  async login(account: string, password: string) {
    const player = await this.playerRepository.findOne({ where: { account } })

    if (!player)
      throw new NotFoundException(`No user found for account: ${account}`)

    const validatePassword = !compareSync(player.password, password)
    if (validatePassword) throw new ForbiddenException('wrong password')

    return player
  }
}
