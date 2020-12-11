import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { RosterComponent} from './components/roster/roster.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  //{ path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'roster', component: RosterComponent },
  { path: 'player/:no/:name', component: PlayerDetailsComponent },
  { path: 'addPlayer', component: AddPlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
