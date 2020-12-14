import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { RosterComponent} from './components/roster/roster.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';


const routes: Routes = [
  { path: '', component: RosterComponent},
  { path: 'roster', component: RosterComponent },
  { path: 'addPlayer', component: PlayerDetailsComponent },
  { path: 'getPlayer/:no/:name', component: PlayerDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
