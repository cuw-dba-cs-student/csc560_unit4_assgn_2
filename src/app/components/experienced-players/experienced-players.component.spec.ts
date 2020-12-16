import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencedPlayersComponent } from './experienced-players.component';

describe('ExperiencedPlayersComponent', () => {
  let component: ExperiencedPlayersComponent;
  let fixture: ComponentFixture<ExperiencedPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencedPlayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencedPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
