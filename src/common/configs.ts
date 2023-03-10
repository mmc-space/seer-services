export interface SwaggerConfig {
  enabled: boolean
  title: string
  description: string
  version: string
  path: string
}

export interface NestConfig {
  port: number
}

export interface CorsConfig {
  enabled: boolean
}

export interface SecurityConfig {
  expiresIn?: string | number
  refreshIn: string
  bcryptSaltOrRound: string | number
}

export interface Config {
  nest: NestConfig
  cors: CorsConfig
  swagger: SwaggerConfig
  security: SecurityConfig
}

export const config = (): Config => ({
  nest: {
    port: 3000,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: 'SEER API',
    description: '回合制对战游戏 赛尔号 简易版实现 服务端',
    version: '1.5',
    path: 'api',
  },
  security: {
    expiresIn: '2m',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  },
})
