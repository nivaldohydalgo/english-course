import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnDay } from './learn-day';

describe('LearnDay', () => {
  let component: LearnDay;
  let fixture: ComponentFixture<LearnDay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnDay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnDay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
