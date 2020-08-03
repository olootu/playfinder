import { Injectable } from '@angular/core';
import { PlayFinder } from '../playfinder.model';
import { Observable, from } from 'rxjs';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiMockService {

  constructor() { }


  public getPitches(): Observable<PlayFinder[]> {
    return from([]);
  }
}