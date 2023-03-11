import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { BattleService } from './battle.service'

// #Doc https://docs.nestjs.com/websockets/gateways

@WebSocketGateway()
export class BattleGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly battleService: BattleService) {}
  @WebSocketServer()
  server: Server

  afterInit(server: Server) {
    this.battleService.setServer(server)
  }

  handleConnection(client: Socket) {
    // 连接建立时的处理逻辑
    this.battleService.handleConnect(client)
  }

  handleDisconnect(client: Socket) {
    // 连接断开时的处理逻辑
    this.battleService.handleDisconnect(client)
  }

  createRoom(client: Socket, playerIds: any[]) {
    console.log(`房主${client.id} 通知playerIds加入`, playerIds)
  }

  @SubscribeMessage('takeTurn')
  takeTurn(client: Socket) {
    console.log(`${client.id}`)
  }
}
