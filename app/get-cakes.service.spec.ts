import { TestBed } from '@angular/core/testing';

import { GetCakesService } from './get-cakes.service';

describe('GetCakesService', () => {
  let service: GetCakesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCakesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
