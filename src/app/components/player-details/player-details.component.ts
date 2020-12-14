import { Component, OnInit, NgZone  } from '@angular/core';
import { SeahawksRosterService} from '../../services/seahawksroster.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  playerNo: any;
  playerName: any  
  playerForm: FormGroup;
  university: FormGroup;
  mode: string = '';
  

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private seahawksRosterService: SeahawksRosterService
  ) { 
    
    this.playerForm = this.formBuilder.group({
      no: [''],
      name: [''],
      age: [''],
      pos: [''],
      gamesplayed: [''],
      gamesstarted: [''],
      wt: [''] ,
      university: this.formBuilder.group({
        college: ['']
      }) ,
      birthdate: [''],
      yrsinnfl: [''], 
      salary: ['']
    })

    this.university = this.formBuilder.group({
      college:['']
    })

    console.log(this.activatedRoute.snapshot);
    console.log(this.activatedRoute.snapshot.url[0].path);

    if (this.activatedRoute.snapshot.url[0].path == 'getPlayer') {

      this.mode = 'UPDATE';
      
      this.playerNo = this.activatedRoute.snapshot.paramMap.get('no');
      
      this.playerName = this.activatedRoute.snapshot.paramMap.get('name');
      
      console.log(this.playerNo);
      
      console.log(this.playerName);
      
      this.seahawksRosterService.GetPlayer(this.playerNo,this.playerName).subscribe(res => {
                        
      console.log('Response from GetPlayer');
      // Set form vals 
      this.playerForm.patchValue({
        no: res[0]['No'],
        name: res[0]['Name'],
        age: res[0]['Age'],
        pos: res[0]['Pos'],
        gamesplayed: res[0]['Games Played'],
        gamesstarted: res[0]['Games Started'],
        wt: res[0]['Wt'] ,                                                 
        birthdate: res[0]['BirthDate'],
        yrsinnfl: res[0]['Yrs in NFL'], 
        salary: res[0]['Salary']
      });
      // Set nested form vals     
      this.playerForm.get('university.college')?.setValue(res[0]['College']['Univ']);

            this.university.patchValue({
              college: res[0]['College']['Univ']
            });
            
          });
    } 

    if (this.activatedRoute.snapshot.url[0].path == 'addPlayer') {
      
      this.mode = 'INSERT';

      this.playerForm = this.formBuilder.group({
        no: [''],
        name: [''],
        age: [''],
        pos: [''],
        gamesplayed: [''],
        gamesstarted: [''],
        wt: [''] ,
        university: this.formBuilder.group({
          college: ['']
        }) ,
        birthdate: [''],
        yrsinnfl: [''], 
        salary: ['']
      })      
    }
  } // End Constructor

  ngOnInit(): void {}

  onUpdate() {
    null;
  }

  onSubmit(): any {
    console.log(this.playerForm.value);
    /*
    this.seahawksRosterService.AddPlayer(this.playerForm.value)
    .subscribe(() => {
        console.log('Player added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/roster'))
      }, (err) => {
        console.log(err);
    }); */
  }

}
