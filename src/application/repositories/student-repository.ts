import { Student } from '../../domain/entities/student'

export interface StudentRepository {
  findOne(id: string): Promise<Student | null>
}
