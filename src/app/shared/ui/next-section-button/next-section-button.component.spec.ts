import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextSectionButtonComponent } from './next-section-button.component';

describe('NextSectionButtonComponent', () => {
  let component: NextSectionButtonComponent;
  let fixture: ComponentFixture<NextSectionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextSectionButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NextSectionButtonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
