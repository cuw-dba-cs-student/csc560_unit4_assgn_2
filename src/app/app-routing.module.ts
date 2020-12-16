import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RosterComponent} from './components/roster/roster.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { AttendedTechComponent } from './components/attended-tech/attended-tech.component';
import { ExperiencedPlayersComponent } from './components/experienced-players/experienced-players.component';

const routes: Routes = [  
  { path: 'roster', component: RosterComponent },
  { path: '',   redirectTo: '/roster', pathMatch: 'full' },
  { path: 'rosterByAge', component: RosterComponent},
  { path: 'rosterRookies', component: RosterComponent},
  { path: 'rosterFiveGames', component: RosterComponent},
  { path: 'addPlayer', component: PlayerDetailsComponent },
  { path: 'getPlayer/:no/:name', component: PlayerDetailsComponent },
  { path: 'rosterTech', component: AttendedTechComponent},
  { path: 'experiencedPlayers', component: ExperiencedPlayersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
