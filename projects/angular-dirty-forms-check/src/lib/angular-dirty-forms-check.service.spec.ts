import { TestBed } from '@angular/core/testing';

import { AngularDirtyFormsCheckService } from './angular-dirty-forms-check.service';

describe('AngularDirtyFormsCheckService', () => {
  let service: AngularDirtyFormsCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularDirtyFormsCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
