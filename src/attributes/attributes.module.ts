import { Module } from '@nestjs/common';
import { AttributesService } from './attributes.service';
import { AttributesController } from './attributes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attribute } from './entities/attribute.entity';
import { MyEntity } from 'src/entities/entities/entity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Attribute, MyEntity])], // ← репозиторий создан
  controllers: [AttributesController],
  providers: [AttributesService],
})
export class AttributesModule {}
