/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SamProfileSectionSkillsService } from './sam-profile-section-skills.service';

describe('SamProfileSectionSkillsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SamProfileSectionSkillsService]
    });
  });

  it('should ...', inject([SamProfileSectionSkillsService], (service: SamProfileSectionSkillsService) => {
    expect(service).toBeTruthy();
  }));
});
