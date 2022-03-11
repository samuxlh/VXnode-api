import { LocalStudentsRepository } from "../../../tests/students-repository";
import { Student } from "../../domain/entities/student";

class LocalChallengesRepository implements LocalStudentsRepository {
    public items: Student[] = [];
    
    findById(id: string): Promise<Student | null> {
        this.items.find(student=> student.id === id);
    }
}