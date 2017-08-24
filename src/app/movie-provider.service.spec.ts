import { TestBed, inject } from '@angular/core/testing';

import { MovieProviderService } from './movie-provider.service';

describe('MovieProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieProviderService]
    });
  });

  it('should be created', inject([MovieProviderService], (service: MovieProviderService) => {
    expect(service).toBeTruthy();
  }));
});
