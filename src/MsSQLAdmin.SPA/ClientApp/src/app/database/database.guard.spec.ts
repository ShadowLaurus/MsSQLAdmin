import { TestBed, async, inject } from '@angular/core/testing';

import { DatabaseGuard } from './database.guard';

describe('DatabaseGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatabaseGuard]
    });
  });

  it('should ...', inject([DatabaseGuard], (guard: DatabaseGuard) => {
    expect(guard).toBeTruthy();
  }));
});
