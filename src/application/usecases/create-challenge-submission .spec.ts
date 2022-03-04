import { CreateChallengeSubmission } from "./create-challenge-submission";

describe('Create challenge submission use case', () => {
    it('should be able to create a new challenge submission', async () => {
        const _sut = new CreateChallengeSubmission();
        const res = await _sut.execute({
            studentId: '12345',
            challengeId: 'ABCDE'
        })

        expect(res).toBeTruthy()
    });
});