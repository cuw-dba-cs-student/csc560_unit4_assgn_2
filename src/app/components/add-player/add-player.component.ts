import { Component, OnInit, NgZone } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { Router } from '@angular/router';
import { SeahawksRosterService } from 'src/app/services/seahawksroster.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  playerForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
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
   }

  ngOnInit(): void {
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
