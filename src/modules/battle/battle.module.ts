import { Module } from '@nestjs/common'
import { BattleController } from './battle.controller'
import { BattleService } from './battle.service'
import { BattleGateway } from './battle.gateway'

@Module({
  imports: [],
  controllers: [BattleController],
  providers: [BattleService, BattleGateway],
})
export class BattleModule {}
