import { TestBed } from '@angular/core/testing';

import { ExerciseService } from './exercise.service';

describe('ExerciseService', () => {
  let service: ExerciseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should evaluate correctly', () => {
    service.questionAnswers = [1, 2, 3, 4, 5];
    service.answerToQuestion = [1, 2, 3, 4, 5];
    service.evaluate();
    expect(service.evaluations).toEqual(['correct', 'correct', 'correct', 'correct', 'correct']);
  });

  it('should evaluate incorrectly', () => {
    service.questionAnswers = [1, 2, 3, 4, 5];
    service.answerToQuestion = [1, 2, 3, 4, 6];
    service.evaluate();
    expect(service.evaluations).toEqual(['correct', 'correct', 'correct', 'correct', 'incorrect']);
  });
});
