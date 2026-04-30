import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';

@Directive({
  selector: '[appParallaxLayer]',
  standalone: true,
})
export class ParallaxLayerDirective {
  private readonly el = inject(ElementRef<HTMLElement>);

  @Input() speed = 0.12;
  @Input() axis: 'y' | 'x' | 'both' = 'y';

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const offsetFromViewportCenter = rect.top - window.innerHeight / 2;
    const moveY = offsetFromViewportCenter * this.speed;
    const moveX = offsetFromViewportCenter * (this.speed / 2);

    let transform = '';

    if (this.axis === 'y') {
      transform = `translate3d(0, ${moveY}px, 0)`;
    } else if (this.axis === 'x') {
      transform = `translate3d(${moveX}px, 0, 0)`;
    } else {
      transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    }

    this.el.nativeElement.style.transform = transform;
  }
}
