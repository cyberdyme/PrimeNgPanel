import { TestBed } from '@angular/core/testing';

import { GenerateNamesService } from './generate-names.service';

describe('GenerateNamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerateNamesService = TestBed.get(GenerateNamesService);
    expect(service).toBeTruthy();
  });
});
