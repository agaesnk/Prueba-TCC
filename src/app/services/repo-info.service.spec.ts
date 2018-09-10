import { TestBed } from '@angular/core/testing';

import { RepoInfoService } from './repo-info.service';

describe('RepoInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepoInfoService = TestBed.get(RepoInfoService);
    expect(service).toBeTruthy();
  });
});
