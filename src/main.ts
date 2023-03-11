import { NestFactory } from '@nestjs/core'
import { INestApplication, Logger, ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ConfigService } from '@nestjs/config'

import * as pkg from '../package.json'
import { AppModule } from './app.module'
import type { CorsConfig, NestConfig, SwaggerConfig } from './common/configs'

const swaggerDoc = (app: INestApplication, swaggerConfig: SwaggerConfig) => {
  const options = new DocumentBuilder()
    .setTitle(swaggerConfig?.title || 'API')
    .setDescription(swaggerConfig?.description || 'API')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup(swaggerConfig?.path || 'api', app, document)
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix('api')

  app.useGlobalPipes(new ValidationPipe())

  const configService = app.get(ConfigService)
  const nestConfig = configService.get<NestConfig>('nest')
  const corsConfig = configService.get<CorsConfig>('cors')
  const swaggerConfig = configService.get<SwaggerConfig>('swagger')

  if (swaggerConfig?.enabled) swaggerDoc(app, swaggerConfig)

  if (corsConfig?.enabled) app.enableCors()

  await app.listen(nestConfig?.port || 3000, '0.0.0.0')

  const logger = new Logger(pkg.name)
  const url = await app.getUrl()

  logger.log(`OpenApi: ${url}/api`)
}

bootstrap()
