import { TestBed } from '@angular/core/testing';

import { FreeshareDashboardService } from './freeshare-dashboard.service';

describe('FreeshareDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreeshareDashboardService = TestBed.get(FreeshareDashboardService);
    expect(service).toBeTruthy();
  });
});
