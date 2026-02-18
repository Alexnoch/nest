import { Module } from '@nestjs/common';
import { EntitiesService } from './entities.service';
import { EntitiesController } from './entities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyEntity } from './entities/entity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MyEntity])], // ← репозиторий создан
  controllers: [EntitiesController],
  providers: [EntitiesService],
})
export class EntitiesModule {}
