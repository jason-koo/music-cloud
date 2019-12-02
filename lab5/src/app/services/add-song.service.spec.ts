import { TestBed } from '@angular/core/testing';

import { AddSongService } from './add-song.service';

describe('AddSongService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddSongService = TestBed.get(AddSongService);
    expect(service).toBeTruthy();
  });
});
