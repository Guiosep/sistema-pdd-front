import { TestBed } from '@angular/core/testing';

import { EapwebService } from './eapweb.service';

describe('EapwebService', () => {
  let service: EapwebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EapwebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
