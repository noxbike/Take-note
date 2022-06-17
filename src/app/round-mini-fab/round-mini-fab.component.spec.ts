import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundMiniFabComponent } from './round-mini-fab.component';

describe('RoundMiniFabComponent', () => {
  let component: RoundMiniFabComponent;
  let fixture: ComponentFixture<RoundMiniFabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundMiniFabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundMiniFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
