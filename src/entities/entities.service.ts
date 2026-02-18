import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { CreateEntityDto } from './dto/create-entity.dto';
import { UpdateEntityDto } from './dto/update-entity.dto';
import { MyEntity } from './entities/entity.entity';

@Injectable()
export class EntitiesService {

  constructor(
    @InjectRepository(MyEntity)
    private repo: Repository<MyEntity>, // ← готовый репозиторий
  ) {}
  
  async create() {
    console.log('CREATE')
    const newEntity = this.repo.create({
      update_at: new Date().toISOString() // ← текущее время в ISO формате
    });
    
    return await this.repo.save(newEntity); // ← сохраняем в БД
  }

  findAll() {
    return `This action returns all entities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entity`;
  }

  update(id: number, updateEntityDto: UpdateEntityDto) {
    return `This action updates a #${id} entity`;
  }

  remove(id: number) {
    return `This action removes a #${id} entity`;
  }
}
