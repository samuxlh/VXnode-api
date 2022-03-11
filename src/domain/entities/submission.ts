import { Entity } from '../../core/domain/entity'

type SubmissionCreateProps = {
  challengeId: string
  studentId: string
  createdAt?: Date
}

type SubmissionProps = {
  challengeId: string
  studentId: string
  createdAt: Date
}

export class Submission extends Entity<SubmissionProps> {
  private constructor(props: SubmissionProps, id?: string) {
    super(props, id)
  }

  static create(createProps: SubmissionCreateProps, id?: string) {
    const createdAt = createProps.createdAt ?? new Date()
    const props = { ...createProps, createdAt }
    const submission = new Submission(props, id)
    return submission
  }
}
