import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PspadButtonComponent } from './pspad-button.component';

describe('PspadButtonComponent', () => {
  let component: PspadButtonComponent;
  let fixture: ComponentFixture<PspadButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PspadButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PspadButtonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
