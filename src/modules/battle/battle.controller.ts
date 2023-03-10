import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { BattleDetailDto, BattleDto } from './battle.dto'
import { BattleService } from './battle.service'

@ApiTags('battle')
@Controller('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  @Get('/:id')
  @ApiOperation({ summary: '获取对战详情' })
  @ApiResponse({ status: 200, description: '对战详情' })
  getBattleDetail() {
    return this.battleService.getHello()
  }

  @Post()
  @ApiOperation({ summary: '创建对战' })
  @ApiResponse({ status: 200, description: '对战详情' })
  createBattle(@Body() body: BattleDto) {
    console.log(body)
    return this.battleService.getHello()
  }

  @Patch('/:id')
  @ApiOperation({ summary: '更新对战' })
  @ApiResponse({ status: 200, description: '对战详情' })
  updateBattle(@Param('roomId') roomId: string, @Body() body: BattleDetailDto) {
    console.log(roomId, body)
    return this.battleService.getHello()
  }

  @Delete('/:id')
  @ApiOperation({ summary: '删除对战' })
  @ApiResponse({ status: 200, description: '对战详情' })
  deleteBattle(@Param('roomId') roomId: string, @Body() body: BattleDetailDto) {
    console.log(roomId, body)
    return this.battleService.getHello()
  }
}
