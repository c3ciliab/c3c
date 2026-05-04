import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../../features/landing/views/sections/hero-section/hero-section.component';
import { AboutSectionComponent } from '../../../features/landing/views/sections/about-section/about-section.component';
import { ServicesSectionComponent } from '../../../features/landing/views/sections/services-section/services-section.component';
import { ProjectsSectionComponent } from '../../../features/landing/views/sections/projects-section/projects-section.component';
import { JourneySectionComponent } from '../../../features/landing/views/sections/journey-section/journey-section.component';
import { ContactSectionComponent } from '../../../features/landing/views/sections/contact-section/contact-section.component';

@Component({
  selector: 'app-section-frame',
  standalone: true,
  imports: [
    HeroSectionComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    ProjectsSectionComponent,
    JourneySectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './section-frame.component.html',
  styleUrl: './section-frame.component.scss',
})
export class SectionFrameComponent {
}
