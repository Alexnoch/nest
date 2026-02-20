import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Attribute } from 'src/attributes/entities/attribute.entity';

@Entity('entities')
export class MyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  update_at: string;

  @OneToMany(() => Attribute, (attribute) => attribute.entity)
  attributes!: Attribute[];
}