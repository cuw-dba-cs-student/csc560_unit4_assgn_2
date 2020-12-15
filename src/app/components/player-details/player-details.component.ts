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
      No: [''],
      Name: [''],
      Age: [''],
      Pos: [''],
      GamesPlayed: [''],
      GamesStarted: [''],
      Wt: [''] ,
      College: this.formBuilder.group({
        Univ: ['']
      }) ,
      BirthDate: [''],
      YrsinNFL: [''], 
      Salary: ['']
    })

    this.university = this.formBuilder.group({
      College:['']
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
        console.log('Response from GetPlayer ENDPOINT:');
        console.log(res);
        console.log(this.playerForm);
        // Set form vals 
        this.playerForm.patchValue({
          No: res[0]['No'],
          Name: res[0]['Name'],
          Age: res[0]['Age'],
          Pos: res[0]['Pos'],
          GamesPlayed: res[0]['Games Played'],
          GamesStarted: res[0]['Games Started'],
          Wt: res[0]['Wt'] ,                                                 
          BirthDate: res[0]['BirthDate'],
          YrsinNFL: res[0]['Yrs in NFL'], 
          Salary: res[0]['Salary']
        });
        // Set nested form vals     
        this.playerForm.get('College.Univ')?.setValue(res[0]['College']['Univ']);
      });
    } 

    if (this.activatedRoute.snapshot.url[0].path == 'addPlayer') {
      
      this.mode = 'INSERT';

      this.playerForm = this.formBuilder.group({
        No: [''],
        Name: [''],
        Age: [''],
        Pos: [''],
        GamesPlayed: [''],
        GamesStarted: [''],
        Wt: [''] ,
        College: this.formBuilder.group({
          Univ: ['']
        }) ,
        BirthDate: [''],
        YrsinNFL: [''], 
        Salary: ['']
      })      
    }
  } // End Constructor

  ngOnInit(): void {}

  onUpdate() {
    console.log('onUpdate()');
    console.log(this.playerForm.value);
    this.seahawksRosterService.UpdatePlayer(  this.playerForm.get('No')?.value, encodeURIComponent (this.playerForm.get('Name')?.value), this.playerForm.value ) 
      .subscribe(()=> {
        console.log('Player updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/roster'))
      }, (err) => {
        console.log(err);
      });   
  }

  onSubmit(): any {
    console.log(this.playerForm.value);
    
    this.seahawksRosterService.AddPlayer(this.playerForm.value)
    .subscribe(() => {
        console.log('Player added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/roster'))
      }, (err) => {
        console.log(err);
    }); 
  }

}
