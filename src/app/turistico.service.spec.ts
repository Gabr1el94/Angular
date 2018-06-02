import { TestBed, inject } from '@angular/core/testing';

import { TuristicoService } from './turistico.service';

describe('TuristicoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TuristicoService]
    });
  });

  it('should be created', inject([TuristicoService], (service: TuristicoService) => {
    expect(service).toBeTruthy();
  }));
});
