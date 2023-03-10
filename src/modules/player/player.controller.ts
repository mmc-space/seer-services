import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { PlayerService } from './player.service'

@ApiTags('player')
@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  @ApiOperation({ summary: '获取用户详情' })
  @ApiResponse({ status: 200, description: '用户详情' })
  getElveDetails() {
    return this.playerService.getPlayerDetail()
  }
}
