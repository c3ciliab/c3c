import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFrameComponent } from './section-frame.component';

describe('SectionFrameComponent', () => {
  let component: SectionFrameComponent;
  let fixture: ComponentFixture<SectionFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionFrameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionFrameComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
