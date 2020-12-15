import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Player } from '../models/player.model'
import { PlayedAndStarted } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})

export class SeahawksRosterService {

  // Node/Express API
  REST_API: string = 'http://localhost:3000/api';
  URI: string = '';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

    AddPlayer(payload: Player): Observable<any> {
      console.log('Adding Player');
      console.log(payload);
      let URI = `${this.REST_API}/addPlayer`;      
      return this.httpClient.post(URI, payload)
        .pipe(
          catchError(this.handleError)
        );
    }

    AttendedTech(): Observable<any> {
      let URI = `${this.REST_API}/attendedTech`;
      return this.httpClient.get(URI)
        .pipe(
          catchError(this.handleError)
        );
    }

    DeletePlayer(no: number, name: string): Observable<any> {
      let URI = `${this.REST_API}/deletePlayer/${no}/${name}`;
      return this.httpClient.delete(URI);
    }

    FiveGames(): Observable<any> {
      let URI = `${this.REST_API}/fiveGames`;
      return this.httpClient.get(URI)
        .pipe(
          catchError(this.handleError)
        );
    }

    FullRoster(): Observable<any> {
      let URI = `${this.REST_API}/fullRoster`;
      return this.httpClient.get(URI).pipe(catchError(this.handleError));
    }

    GetPlayer(no: number, name: string): Observable<any>  {
      let URI = `${this.REST_API}/getPlayer/${no}/${name}`;
      return this.httpClient.get(URI).pipe(catchError(this.handleError));
    }
    
    Rookies(): Observable<any> {
      let URI = `${this.REST_API}/rookies`;
      return this.httpClient.get(URI).pipe(catchError(this.handleError));
    }
        
    RosterByAge(): Observable<any> {
      let URI = `${this.REST_API}/rosterByAge`;
      return this.httpClient.get(URI).pipe(catchError(this.handleError));
    }
    
    RosterByAgeDesc(): Observable<any> {
      let URI = `${this.REST_API}/rosterByAgeDesc`;
      return this.httpClient.get(URI).pipe(catchError(this.handleError));
    }    
    
    UpdatePlayer(no: number, name: string, payload: PlayedAndStarted): Observable<any> {
      let URI = `${this.REST_API}/updatePlayer/${no}/${name}`;
      return this.httpClient.patch(URI,payload).pipe(catchError(this.handleError)); 
    }
  
  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
