import { TestBed, inject } from '@angular/core/testing';

import { HotelariaService } from './hotelaria.service';

describe('HotelariaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelariaService]
    });
  });

  it('should be created', inject([HotelariaService], (service: HotelariaService) => {
    expect(service).toBeTruthy();
  }));
});
