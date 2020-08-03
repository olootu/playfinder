import { Injectable } from '@angular/core';
import { PlayFinder } from '../playfinder.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiMockService {

  constructor() { }

  public getPitches(): Observable<PlayFinder[]> {
    return of([
      //new PlayFinder({ id: 1, label: 'Todo Item1', description: 'My Todo', category: 'General', done: false })
    ]);
  }
}