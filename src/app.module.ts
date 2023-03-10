import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'

import { BattleModule } from '@/modules/battle/battle.module'
import { ElveModule } from '@/modules/elve/elve.module'
import { PlayerModule } from '@/modules/player/player.module'

import { config } from '@/common/configs'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.development.env', '.production.env'],
      load: [config],
      isGlobal: true,
    }),
    BattleModule,
    ElveModule,
    PlayerModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
