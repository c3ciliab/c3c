import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherUniversePageComponent } from './another-universe-page.component';

describe('AnotherUniversePageComponent', () => {
  let component: AnotherUniversePageComponent;
  let fixture: ComponentFixture<AnotherUniversePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnotherUniversePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnotherUniversePageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
