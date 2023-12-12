import { TestBed } from '@angular/core/testing';

import { WinnerDataService } from './winner-data.service';

describe('WinnerDataService', () => {
  let service: WinnerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WinnerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
