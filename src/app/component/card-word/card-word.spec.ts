import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWord } from './card-word';

describe('CardWord', () => {
  let component: CardWord;
  let fixture: ComponentFixture<CardWord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardWord]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardWord);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
