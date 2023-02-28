import { TestBed } from '@angular/core/testing';

import { CheckValidGuard } from './check-valid.guard';

describe('CheckValidGuard', () => {
  let guard: CheckValidGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckValidGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
