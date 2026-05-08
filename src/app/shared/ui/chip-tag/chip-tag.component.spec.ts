import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipTagComponent } from './chip-tag.component';

describe('ChipTagComponent', () => {
  let component: ChipTagComponent;
  let fixture: ComponentFixture<ChipTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipTagComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipTagComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
