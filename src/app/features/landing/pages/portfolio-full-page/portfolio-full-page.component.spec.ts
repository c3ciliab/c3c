import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFullPageComponent } from './portfolio-full-page.component';

describe('PortfolioFullPageComponent', () => {
  let component: PortfolioFullPageComponent;
  let fixture: ComponentFixture<PortfolioFullPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioFullPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioFullPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
