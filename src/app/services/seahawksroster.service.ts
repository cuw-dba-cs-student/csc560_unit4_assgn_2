import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Player } from '../models/player.model'

@Injectable({
  providedIn: 'root'
})

export class SeahawksrosterService {

  // Node/Express API
  REST_API: string = 'http://localhost:3000/api';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

    // Add
    AddPlayer(data: Player): Observable<any> {
      let API_URL = `${this.REST_API}/addPlayer`;
      return this.httpClient.post(API_URL, data)
        .pipe(
          catchError(this.handleError)
        )
    }

    AttendedTech(): Observable<any> {
      let API_URL = `${this.REST_API}/attendedTech`;
      return this.httpClient.get(API_URL)
        .pipe(
          catchError(this.handleError)
        )
    }

    

    FiveGames(): Observable<any> {
      let API_URL = `${this.REST_API}/fiveGames`;
      return this.httpClient.get(API_URL)
        .pipe(
          catchError(this.handleError)
        )
    }
  /*
  app.use('api/addPlayer',addPlayerRouter);
  app.use('api/attendedTech',attendedTechRouter);
  app.use('api/deletePlayer',deletePlayerRouter);
  app.use('api/fiveGames',fiveGamesRouter);
  app.use('api/fullRoster', fullRosterRouter);
  app.use('api/getPlayer', getPlayerRouter);
  app.use('api/rookies',rookieRouter);
  app.use('api/rosterByAge',rosterByAgeRouter);
  app.use('api/rosterByAgeDesc',rosterByAgeDescRouter);
  app.use('api/updatePlayer',updatePlayerRouter);
  */
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
