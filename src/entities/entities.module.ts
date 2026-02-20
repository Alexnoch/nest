import { Module } from '@nestjs/common';
import { EntitiesService } from './entities.service';
import { EntitiesController } from './entities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyEntity } from './entities/entity.entity';
import { Attribute } from 'src/attributes/entities/attribute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MyEntity, Attribute])], // ← репозиторий создан
  controllers: [EntitiesController],
  providers: [EntitiesService],
})
export class EntitiesModule {}
