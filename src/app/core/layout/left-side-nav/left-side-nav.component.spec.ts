import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideNavComponent } from './left-side-nav.component';

describe('LeftSideNavComponent', () => {
  let component: LeftSideNavComponent;
  let fixture: ComponentFixture<LeftSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftSideNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeftSideNavComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
