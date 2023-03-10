import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { ElveService } from './elve.service'
import {} from './elve.dto'

@ApiTags('elve')
@Controller('elve')
export class ElveController {
  constructor(private readonly elveService: ElveService) {}

  @Get(':id')
  @ApiOperation({ summary: '获取精灵详情' })
  @ApiResponse({ status: 200, description: '精灵详情' })
  getElveDetailsById(@Param('id') elveId: number) {
    return this.elveService.getElveDetailsById(elveId)
  }
}
