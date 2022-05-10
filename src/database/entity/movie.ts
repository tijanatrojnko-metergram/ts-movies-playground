import { Entity, Column, PrimaryColumn,BaseEntity } from "typeorm"

@Entity({ name: 'movie' })
export class Movie extends BaseEntity {

    @PrimaryColumn()
    id: string

    @Column()
    title: string

    @Column()
    year: number

    @Column()
    runtime: number

    @Column("float")
    rating: number

    @Column()
    votes: number

}