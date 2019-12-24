import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path';
import * as fs from 'fs-sync';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const currentPath: string = path.resolve(path.dirname(''));
  const port = fs.readJSON(path.join(currentPath, '.env.json')).port;
  await app.listen(port);
}

bootstrap();
