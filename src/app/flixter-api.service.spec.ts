import { TestBed } from '@angular/core/testing';

import { FlixterApiService } from './flixter-api.service';

describe('FlixterApiService', () => {
  let service: FlixterApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlixterApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
