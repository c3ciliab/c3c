import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllServicesPageComponent } from './all-services-page.component';

describe('AllServicesPageComponent', () => {
  let component: AllServicesPageComponent;
  let fixture: ComponentFixture<AllServicesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllServicesPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AllServicesPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
