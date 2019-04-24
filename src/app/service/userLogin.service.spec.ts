import { TestBed } from '@angular/core/testing';

import { userLoginService } from './userLogin.service';

describe('userLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: userLoginService = TestBed.get(userLoginService);
    expect(service).toBeTruthy();
  });
});
