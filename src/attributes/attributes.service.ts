import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';
import { Attribute } from './entities/attribute.entity';

@Injectable()
export class AttributesService {
  constructor(
    @InjectRepository(Attribute)
    private readonly attributeRepository: Repository<Attribute>,
  ) {}

  async create(createAttributeDto: CreateAttributeDto) {
    console.log('TEST')
    const newAttribute = this.attributeRepository.create(createAttributeDto);
    console.log('TEST2')
    return await this.attributeRepository.save(newAttribute);
  }

  findAll() {
    return `This action returns all attributes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attribute`;
  }

  update(id: number, updateAttributeDto: UpdateAttributeDto) {
    return `This action updates a #${id} attribute`;
  }

  remove(id: number) {
    return `This action removes a #${id} attribute`;
  }
}
