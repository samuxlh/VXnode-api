import { CreateChallengeSubmission } from './create-challenge-submission'
import { InMemoryStudentRepository } from '../../../tests/repositories/in-memory-student-repository'
import { InMemoryChallengeRepository } from '../../../tests/repositories/in-memory-challenge-repository'
import { Student } from '../../domain/entities/student'
import { Challenge } from '../../domain/entities/challenge'

describe('CreateChallengeSubmission', () => {
  it('should be able to create a new challenge submission', () => {
    const inMemoryStudentRepository = new InMemoryStudentRepository()

    const student = Student.create({
      name: 'Matheus Inocêncio',
      email: 'matheus@dev.com',
    })

    const inMemoryChallengeRepository = new InMemoryChallengeRepository()

    const challenge = Challenge.create({
      title: 'Challenge Example',
      instructionsUrl: 'http://example.com',
    })

    const createChallengeSubmission = new CreateChallengeSubmission(
      inMemoryStudentRepository,
      inMemoryChallengeRepository,
    )

    const response = createChallengeSubmission.execute({
      studentId: student.id,
      challengeId: challenge.id,
    })

    expect(response).toBeTruthy()
  })
})
