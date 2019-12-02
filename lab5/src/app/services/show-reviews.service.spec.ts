import { TestBed } from '@angular/core/testing';

import { ShowReviewsService } from './show-reviews.service';

describe('ShowReviewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowReviewsService = TestBed.get(ShowReviewsService);
    expect(service).toBeTruthy();
  });
});
