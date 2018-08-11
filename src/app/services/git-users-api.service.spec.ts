import { TestBed, inject } from '@angular/core/testing';

import { GitUsersApiService } from './git-users-api.service';

describe('GitUsersApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitUsersApiService]
    });
  });

  it('should ...', inject([GitUsersApiService], (service: GitUsersApiService) => {
    expect(service).toBeTruthy();
  }));
});
