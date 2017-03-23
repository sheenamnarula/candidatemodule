/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SamProfileCardService } from './sam-profile-card.service';

describe('SamProfileCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SamProfileCardService]
    });
  });

  it('should ...', inject([SamProfileCardService], (service: SamProfileCardService) => {
    expect(service).toBeTruthy();
  }));
});
