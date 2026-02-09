import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDay } from './button-day';

describe('ButtonDay', () => {
  let component: ButtonDay;
  let fixture: ComponentFixture<ButtonDay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
