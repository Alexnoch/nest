import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntitiesModule } from './entities/entities.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyEntity } from './entities/entities/entity.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'myuser',
      password: 'mypassword',
      database: 'mydatabase',
      schema:'kb',
      entities: [MyEntity],
      synchronize: true,
      logging: true,
    }),
    EntitiesModule, // ← ВСЕ В ОДНОМ МОДУЛЕ
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}