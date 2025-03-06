import { TestBed } from '@angular/core/testing';

import { SharesrviceService } from './sharesrvice.service';

describe('SharesrviceService', () => {
  let service: SharesrviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharesrviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
