import { Component } from '@angular/core';

//Seth Start 
import { SeahawksRosterService } from './services/seahawksroster.service';
import { OnInit } from '@angular/core';
//Seth End

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'csc560unit4assgn4dot2';
  roster:any = [];
  constructor(private apiService: SeahawksRosterService) { }
	ngOnInit() {
		this.apiService.FiveGames().subscribe((data: any[])=>{  
			console.log(data);  
			this.roster = data;  
		})  
	}
}
