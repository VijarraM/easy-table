import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';
import { CORS } from './constants/cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.use(morgan('dev'));

  app.enableCors(CORS);

  app.setGlobalPrefix('api');

  await app.listen(configService.get('PORT'));
  console.log(`Application Running on: ${await app.getUrl()}`);
}
bootstrap();
