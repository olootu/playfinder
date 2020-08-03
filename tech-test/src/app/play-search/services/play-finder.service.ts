import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { PlayFinder } from '../playfinder.model';

// Fake Server
const baseApi = environment.baseApi;

@Injectable({
  providedIn: 'root'
})
export class PlayFinderService {

  constructor(private http: HttpClient) { };

  // GET all Pitches
  getPitches(id, starts, ends): Observable<PlayFinder> {
    return this.http.get<PlayFinder>(`${baseApi}/${id}/slots?filter[starts]=${starts}&filter[ends]=${ends}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
