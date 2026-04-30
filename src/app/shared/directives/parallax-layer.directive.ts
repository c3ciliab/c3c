import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';

@Directive({
  selector: '[appParallaxLayer]',
  standalone: true,
})
export class ParallaxLayerDirective {
  private readonly el = inject(ElementRef<HTMLElement>);

  @Input() speed = 0.15;
  @Input() axis: 'y' | 'x' | 'both' = 'y';

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollY = window.scrollY;
    const moveY = scrollY * this.speed;
    const moveX = scrollY * (this.speed / 3);

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
