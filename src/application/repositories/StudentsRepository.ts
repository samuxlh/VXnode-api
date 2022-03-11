import { Student } from "../../domain/entities/student"

export interface LocalStudentsRepository {
    findById(id: string): Promise<Student | null>;
}