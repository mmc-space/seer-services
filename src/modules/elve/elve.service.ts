import { Injectable } from '@nestjs/common'
import { ElveDetailDto } from './elve.dto'

@Injectable()
export class ElveService {
  getElveDetailsById(elveId: number) {
    const elve: ElveDetailDto = {
      name: '毛毛虫',
      elveId,
    }
    return elve
  }
}
