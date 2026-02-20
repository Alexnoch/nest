import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // удалит поля, которых нет в DTO
    forbidNonWhitelisted: true, // выдаст ошибку, если есть лишние поля
    transform: true, // автоматически преобразует типы (например, строку в число)
  }));

  await app.listen(3000);
}
bootstrap();
