import { TestBed } from '@angular/core/testing';

import { freeshareDashboardService } from './freeshareDashboard.service';

describe('freeshareDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: freeshareDashboardService = TestBed.get(freeshareDashboardService);
    expect(service).toBeTruthy();
  });
});
