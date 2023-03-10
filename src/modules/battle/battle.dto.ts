import { IsArray, IsString } from 'class-validator'

export class BattleDto {
  @IsArray({ message: '所有玩家id' })
  allPlayerIds: string[]
}

export class BattleDetailDto extends BattleDto {
  @IsString({ message: '房间id' })
  roomId: string
}
