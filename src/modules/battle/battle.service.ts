import { Injectable } from '@nestjs/common'
import { Server, Socket } from 'socket.io'

@Injectable()
export class BattleService {
  private server: Server
  private players: Map<string, Socket> = new Map()

  getHello() {
    return this.server
  }

  setServer(server: Server) {
    this.server = server
  }

  handleConnect(client: Socket) {
    this.players.set(client.id, client)
  }

  handleDisconnect(client: Socket) {
    this.players.delete(client.id)
  }
}
