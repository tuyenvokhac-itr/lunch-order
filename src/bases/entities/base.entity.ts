import {
  BeforeUpdate,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

export abstract class AbstractCreatedEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @CreateDateColumn({ name: 'created_on', type: 'timestamptz' })
  createdOn: Date;

  @Column({ type: 'timestamptz', name: 'updated_on', default: null })
  updatedOn: Date;

  @BeforeUpdate()
  beforeUpdateActions() {
    this.updatedOn = new Date();
  }
}
