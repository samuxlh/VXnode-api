import { Submission } from '../../domain/entities/submission'
import { ChallengeRepository } from '../repositories/challenge-repository'
import { StudentRepository } from '../repositories/student-repository'

type CreateChallengeSubmissionRequest = {
  studentId: string
  challengeId: string
}

export class CreateChallengeSubmission {
  constructor(
    private readonly studentRepository: StudentRepository,
    private readonly challengeRepository: ChallengeRepository,
  ) {}

  async execute(request: CreateChallengeSubmissionRequest) {
    const student = await this.studentRepository.findOne(request.studentId)
    if (!student) throw new Error('student does not exists.')
    const challenge = await this.challengeRepository.findOne(request.challengeId)
    if (!challenge) throw new Error('challenge does not exists.')
    const submission = Submission.create(request)
    return submission
  }
}
