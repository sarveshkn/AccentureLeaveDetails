import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveCompleteDetailsComponent } from './leave-complete-details.component';

describe('LeaveCompleteDetailsComponent', () => {
  let component: LeaveCompleteDetailsComponent;
  let fixture: ComponentFixture<LeaveCompleteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveCompleteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveCompleteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
