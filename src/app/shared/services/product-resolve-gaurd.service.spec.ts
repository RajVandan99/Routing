import { TestBed } from '@angular/core/testing';

import { ProductResolveGaurdService } from './product-resolve-gaurd.service';

describe('ProductResolveGaurdService', () => {
  let service: ProductResolveGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductResolveGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
