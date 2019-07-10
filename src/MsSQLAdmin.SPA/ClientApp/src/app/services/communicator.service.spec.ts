import { TestBed } from '@angular/core/testing';

import { CommunicatorService } from './communicator.service';

describe('CommunicatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommunicatorService = TestBed.get(CommunicatorService);
    expect(service).toBeTruthy();
  });
});
