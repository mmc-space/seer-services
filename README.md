# SEER-SERVICES

回合制对战游戏 赛尔号 简易版实现 服务端

## todo

- [ ] socket通信


battle => 新建对战 暴露接口 socket 通知双方状态

- 匹配 - 所有玩家连接到服务上
- 对战 - 创建连接 player1向player2发起挑战，发送createRoom请求，返回roomId, 通知player2加入
- 通信 - 轮流使用技能，服务管理双方状态
- 