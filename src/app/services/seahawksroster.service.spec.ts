import { TestBed } from '@angular/core/testing';

import { SeahawksrosterService } from './seahawksroster.service';

describe('SeahawksrosterService', () => {
  let service: SeahawksrosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeahawksrosterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
