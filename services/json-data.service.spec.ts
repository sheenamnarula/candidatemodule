/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JsonDataService } from './json-data.service';

describe('JsonDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonDataService]
    });
  });

  it('should ...', inject([JsonDataService], (service: JsonDataService) => {
    expect(service).toBeTruthy();
  }));
});
