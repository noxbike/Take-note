import { TestBed } from '@angular/core/testing';

import { TakeNoteService } from './take-note.service';

describe('TakeNoteService', () => {
  let service: TakeNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakeNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
