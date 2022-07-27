import { TestBed } from '@angular/core/testing';

import { RendervousService } from './rendervous.service';

describe('RendervousService', () => {
  let service: RendervousService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RendervousService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
