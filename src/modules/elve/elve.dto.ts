import { IsNumber, IsOptional, IsString } from 'class-validator'

import { ApiProperty } from '@nestjs/swagger'

export class ElveDto {
  @ApiProperty({ required: true })
  @IsNumber({ allowNaN: false, allowInfinity: false }, { message: '序列号' })
  @IsOptional()
  elveId: number
}

export class ElveDetailDto extends ElveDto {
  @IsString({ message: '名称' })
  @IsOptional()
  name: string
}
