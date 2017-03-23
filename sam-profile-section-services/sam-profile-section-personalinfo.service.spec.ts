/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SamProfileSectionPersonalinfoService } from './sam-profile-section-personalinfo.service';

describe('SamProfileSectionPersonalinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SamProfileSectionPersonalinfoService]
    });
  });

  it('should ...', inject([SamProfileSectionPersonalinfoService], (service: SamProfileSectionPersonalinfoService) => {
    expect(service).toBeTruthy();
  }));
});
