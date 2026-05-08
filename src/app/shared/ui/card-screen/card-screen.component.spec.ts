import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardScreenComponent } from './card-screen.component';

describe('CardScreenComponent', () => {
  let component: CardScreenComponent;
  let fixture: ComponentFixture<CardScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardScreenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardScreenComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
