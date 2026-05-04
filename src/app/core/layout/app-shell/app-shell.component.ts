import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LeftSideNavComponent } from '../left-side-nav/left-side-nav.component';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { HeroSectionComponent } from '../../../features/landing/views/sections/hero-section/hero-section.component';
import { AboutSectionComponent } from '../../../features/landing/views/sections/about-section/about-section.component';
import { ServicesSectionComponent } from '../../../features/landing/views/sections/services-section/services-section.component';
import { ProjectsSectionComponent } from '../../../features/landing/views/sections/projects-section/projects-section.component';
import { JourneySectionComponent } from '../../../features/landing/views/sections/journey-section/journey-section.component';
import { ContactSectionComponent } from '../../../features/landing/views/sections/contact-section/contact-section.component';
import { PspadButtonComponent } from "../../../shared/ui/pspad-button/pspad-button.component";

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    RouterLink,
    LeftSideNavComponent,
    LanguageSwitcherComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    ProjectsSectionComponent,
    JourneySectionComponent,
    ContactSectionComponent,
    PspadButtonComponent
],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss',
})
export class AppShellComponent {}
