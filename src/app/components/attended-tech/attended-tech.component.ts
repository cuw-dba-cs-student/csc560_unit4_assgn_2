import { Component, OnInit } from '@angular/core';
import { SeahawksRosterService} from '../../services/seahawksroster.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-attended-tech',
  templateUrl: './attended-tech.component.html',
  styleUrls: ['./attended-tech.component.css']
})
export class AttendedTechComponent implements OnInit {

  Roster:any = [];

  constructor(    
    private seahawksRosterService: SeahawksRosterService,
    private activatedRoute: ActivatedRoute) { 
      this.seahawksRosterService. AttendedTech().subscribe(
        res => {
          this.Roster = res;
        });
    }

  ngOnInit(): void {
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


