import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioShellPageComponent } from './portfolio-shell-page.component';

describe('PortfolioShellPageComponent', () => {
  let component: PortfolioShellPageComponent;
  let fixture: ComponentFixture<PortfolioShellPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioShellPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioShellPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
