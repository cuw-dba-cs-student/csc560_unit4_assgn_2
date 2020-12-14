import { Component, OnInit } from '@angular/core';
import { SeahawksRosterService } from '../../services/seahawksroster.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  Roster:any = [];

  constructor(private seahawksRosterService: SeahawksRosterService) { }

  ngOnInit(): void {
    this.seahawksRosterService.FullRoster().subscribe(
      res => {        
        this.Roster = res;
    });   
  }

  deletePlayer(no:any, name:any, i:any) {
    console.log(no + " " + name);
    if(window.confirm('Are you sure you want to delete this player from the roster?')) {
      this.seahawksRosterService.DeletePlayer(no, encodeURIComponent(name.trim())).subscribe((res) => {
        this.Roster.splice(i, 1);
      })
    }
  }

}
