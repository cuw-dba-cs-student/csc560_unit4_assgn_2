import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { RosterComponent } from './components/roster/roster.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UrlEncodePipePipe } from './pipes/url-encode-pipe.pipe';
import { ExperiencedPlayersComponent } from './components/experienced-players/experienced-players.component';
import { AttendedTechComponent } from './components/attended-tech/attended-tech.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    RosterComponent,
    PlayerDetailsComponent,
    UrlEncodePipePipe,
    ExperiencedPlayersComponent,
    AttendedTechComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
