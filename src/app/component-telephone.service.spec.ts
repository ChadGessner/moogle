import { TestBed } from '@angular/core/testing';

import { ComponentTelephoneService } from './component-telephone.service';

describe('ComponentTelephoneService', () => {
  let service: ComponentTelephoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentTelephoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
