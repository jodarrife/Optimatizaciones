import { TestBed } from '@angular/core/testing';

import { YourServiceNameService } from './your-service-name.service';

describe('YourServiceNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YourServiceNameService = TestBed.get(YourServiceNameService);
    expect(service).toBeTruthy();
  });
});
