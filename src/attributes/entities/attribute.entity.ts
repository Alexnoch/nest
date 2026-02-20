import { Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { MyEntity } from 'src/entities/entities/entity.entity';

@Entity('attributes')
export class Attribute {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'entity_id' }) 
    entityId: number;

    @Column({ name: 'attribute_name' })
    name: string;

    @Column({ name: 'attribute_value', type: 'jsonb', nullable: true })
    value: Record<string, any>;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'last_update' })
    updatedAt: Date;

    @Column({ name: 'last_modification', nullable: true })
    modifiedBy: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @ManyToOne(() => MyEntity, (entity) => entity.attributes)
    @JoinColumn({ name: 'entity_id' })
    entity: MyEntity;
}


