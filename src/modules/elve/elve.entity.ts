import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('elve')
export class ElveEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
}
