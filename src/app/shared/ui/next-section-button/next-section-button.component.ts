import { Component, Input, inject } from '@angular/core';
import { I18nService } from '../../../core/services/i18n.service';
import { SectionScrollService } from '../../../core/services/section-scroll.service';
import { PspadButtonComponent } from "../../../shared/ui/pspad-button/pspad-button.component";

@Component({
  selector: 'app-next-section-button',
  standalone: true,
  imports: [PspadButtonComponent],
  templateUrl: './next-section-button.component.html',
  styleUrl: './next-section-button.component.scss',
})
export class NextSectionButtonComponent {
  private readonly i18n = inject(I18nService);
  private readonly sectionScroll = inject(SectionScrollService);

  @Input({ required: true }) currentSectionId!: string;
  @Input() labelKey = 'common.next';
  @Input() goToSectionId?: string;
  // @Input() showIcon = true;
  // @Input() direction: 'down' | 'up' = 'down';
  @Input() direction: 'down' | 'up' | 'none' = 'down';
  @Input() isBackToTop = false;

  next(): void {
    if (this.goToSectionId) {
      this.sectionScroll.scrollToSection(this.goToSectionId);
      return;
    }

    this.sectionScroll.goToNextSection(this.currentSectionId);
  }

  label(): string {
    // return this.i18n.t('common.next');
    return this.i18n.t(this.labelKey);
  }

  icon(): string {
  if (this.direction === 'up') return '↑';
  if (this.direction === 'down') return '↓';
    return '';
  }
}
