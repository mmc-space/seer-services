import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { BattleService } from './battle.service'

@ApiTags('battle')
@Controller('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  @Get()
  getHello(): string {
    return this.battleService.getHello()
  }
}
