import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'

// #Doc https://docs.nestjs.com/websockets/gateways

@WebSocketGateway()
export class BattleGateway {
  @WebSocketServer()
  server: Server

  destroyById(roomId: string) {}

  joinRoomById(roomId: string) {}

  disconnectById(roomId: string) {}

  createRoom(client: Socket, playerIds: any[]) {
    console.log(`房主${client.id} 通知playerIds加入`, playerIds)
  }

  @SubscribeMessage('takeTurn')
  takeTurn(client: Socket) {
    console.log(`${client.id}`)

    // 通知
    // this.server.to
  }
}
