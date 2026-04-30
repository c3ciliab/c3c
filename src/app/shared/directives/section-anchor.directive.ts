import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, inject } from '@angular/core';
import { ActiveSectionService } from '../../core/services/active-section.service';

@Directive({
  selector: '[appSectionAnchor]',
  standalone: true,
})
export class SectionAnchorDirective implements AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly activeSectionService = inject(ActiveSectionService);
  private observer?: IntersectionObserver;

  @Input({ required: true }) sectionId!: string;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.55) {
            this.activeSectionService.setActiveSection(this.sectionId);
          }
        });
      },
      {
        threshold: [0.4, 0.55, 0.7],
      },
    );

    observer.observe(this.el.nativeElement);
    //this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
