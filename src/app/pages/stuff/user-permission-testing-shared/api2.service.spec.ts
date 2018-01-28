import { TestBed, inject } from '@angular/core/testing';

import { Api2Service } from './api2.service';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Api2Service]
    });
  });

  it('should be created', inject([Api2Service], (service: Api2Service) => {
    expect(service).toBeTruthy();
  }));
});
