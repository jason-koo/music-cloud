import { TestBed } from '@angular/core/testing';

import { ShowSongDetailsService } from './show-song-details.service';

describe('ShowSongDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowSongDetailsService = TestBed.get(ShowSongDetailsService);
    expect(service).toBeTruthy();
  });
});
