import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('entities')
export class MyEntity {  // ← переименовал с Entity на MyEntity
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  update_at: string;
}