import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendedTechComponent } from './attended-tech.component';

describe('AttendedTechComponent', () => {
  let component: AttendedTechComponent;
  let fixture: ComponentFixture<AttendedTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendedTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendedTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
