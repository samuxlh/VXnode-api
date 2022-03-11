import { Challenge } from '../../domain/entities/challenge'

export interface ChallengeRepository {
  findOne(id: string): Promise<Challenge | null>
}
