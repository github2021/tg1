import { TestBed, inject } from '@angular/core/testing';

import { InMemHeroService } from './in-memory-data-service.service';

describe('InMemoryDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemHeroService]
    });
  });

  it('should be created', inject([InMemHeroService], (service: InMemHeroService) => {
    expect(service).toBeTruthy();
  }));
});
