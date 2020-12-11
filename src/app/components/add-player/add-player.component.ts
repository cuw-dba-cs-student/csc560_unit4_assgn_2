import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { SeahawksRosterService } from 'src/app/services/seahawksroster.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
