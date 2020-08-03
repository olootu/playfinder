import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PlayFinderService } from './play-finder.service';
import { ApiMockService } from './api-mock.service';

describe('PlayFinderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [
      {
        provide: PlayFinderService,
        useClass: ApiMockService

      }
    ]
  }));

  it('should be created', () => {
    const service: PlayFinderService = TestBed.get(PlayFinderService);
    expect(service).toBeTruthy();
  });

  it('should inject', inject([ApiMockService], (service: ApiMockService) => {
    expect(service).toBeTruthy();
  }));

  it('should return all Pitches', inject([ApiMockService], (service: ApiMockService) => {
    const getAll = service.getPitches();
    expect(getAll).not.toBeNull();
  }));
});