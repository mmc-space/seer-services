import { Module } from '@nestjs/common'
import { ElveController } from './elve.controller'
import { ElveService } from './elve.service'

@Module({
  imports: [],
  controllers: [ElveController],
  providers: [ElveService],
})
export class ElveModule {}
