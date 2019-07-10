import { TestBed } from '@angular/core/testing';

import { SwaggerInterceptorService } from './swagger-interceptor.service';

describe('SwaggerInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwaggerInterceptorService = TestBed.get(SwaggerInterceptorService);
    expect(service).toBeTruthy();
  });
});
