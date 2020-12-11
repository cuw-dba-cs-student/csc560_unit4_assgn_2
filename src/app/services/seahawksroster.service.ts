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

    //app.use('/api/addPlayer',addPlayerRouter);
    AddPlayer(payload: Player): Observable<any> {
      let URI = `${this.REST_API}/addPlayer`;      
      return this.httpClient.post(URI, payload)
        .pipe(
          catchError(this.handleError)
        );
    }

    //app.use('/api/attendedTech',attendedTechRouter);
    AttendedTech(): Observable<any> {
      let URI = `${this.REST_API}/attendedTech`;
      return this.httpClient.get(URI)
        .pipe(
          catchError(this.handleError)
        );
    }

    //app.use('/api/deletePlayer',deletePlayerRouter);
    DeletePlayer(no: number, name: string): Observable<any> {
      let URI = `${this.REST_API}/deletePlayer/${no}/${name}`;
      return this.httpClient.delete(URI);
    }

    //app.use('/api/fiveGames',fiveGamesRouter);
    FiveGames(): Observable<any> {
      let URI = `${this.REST_API}/fiveGames`;
      return this.httpClient.get(URI)
        .pipe(
          catchError(this.handleError)
        );
    }

    //app.use('/api/fullRoster', fullRosterRouter);
    FullRoster(): Observable<any> {
      let URI = `${this.REST_API}/api/fullRoster`;
      return this.httpClient.get(URI).pipe(catchError(this.handleError));
    }

    //app.use('/api/getPlayer', getPlayerRouter);
    GetPlayer(no: number, name: string): Observable<any>  {
      let URI = `${this.REST_API}/api/getPlayer/${no}/${name}`;
      return this.httpClient.get(URI).pipe(catchError(this.handleError));
    }

    //app.use('/api/rookies',rookieRouter);
    Rookies(): Observable<any> {
      let URI = `${this.REST_API}/api/rookies`;
      return this.httpClient.get(URI).pipe(catchError(this.handleError));
    }
    
    //app.use('/api/rosterByAge',rosterByAgeRouter);
    RosterByAge(): Observable<any> {
      let URI = `${this.REST_API}/api/rosterByAge`;
      return this.httpClient.get(URI).pipe(catchError(this.handleError));
    }
    
    //app.use('/api/rosterByAgeDesc',rosterByAgeDescRouter);
    RosterByAgeDesc(): Observable<any> {
      let URI = `${this.REST_API}/api/rosterByAgeDesc`;
      return this.httpClient.get(URI).pipe(catchError(this.handleError));
    }    
    
    //app.use('/api/updatePlayer',updatePlayerRouter);
    UpdatePlayer(no: number, name: string, payload: PlayedAndStarted): Observable<any> {
      let URI = `${this.REST_API}/api/updatePlayer/${no}/${name}`;
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
