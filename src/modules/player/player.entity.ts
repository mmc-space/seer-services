import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { hashSync } from 'bcrypt'

@Entity('player')
export class PlayerEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  account: string

  @Column()
  password: string

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 6)
  }
}
