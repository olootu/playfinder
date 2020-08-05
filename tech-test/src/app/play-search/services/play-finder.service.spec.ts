import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PlayFinder } from '../playfinder.model'

import { PlayFinderService } from './play-finder.service';

fdescribe('PlayFinderService', () => {
  let service: PlayFinderService;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlayFinderService]
    });
    service = TestBed.get(PlayFinderService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should retrieve pitches from API via GET', () => {
    const dummyPitchesData: PlayFinder[] = [
      {
        type: '',
        id: '32990',
        attributes: {
          starts: '2018-01-01',
          ends: '2018-01-01',
          price: '15:00',
          admin_fee: '0:00',
          currency: '0:00',
          availabilities: 0
        }
      },
      {
        type: '',
        id: '32990',
        attributes: {
          starts: '2018-01-01',
          ends: '2018-01-01',
          price: '15:00',
          admin_fee: '0:00',
          currency: '0:00',
          availabilities: 0
        }
      }
    ];

    service.getPitches('32990', '2018-01-01', '2018-01-01')
      .subscribe(res => {
        expect(res.length).toBe(2);
      });

    const request = httpMock.expectOne('https://api-v2.pfstaging.xyz/pitches/32990/slots?filter[starts]=2018-01-01&filter[ends]=2018-01-01');
    expect(request.request.method).toBe('GET');

    request.flush(dummyPitchesData);

  });
});