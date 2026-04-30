import { Component, Input, inject } from '@angular/core';
import { I18nService } from '../../../core/services/i18n.service';
import { SectionScrollService } from '../../../core/services/section-scroll.service';

@Component({
  selector: 'app-next-section-button',
  standalone: true,
  imports: [],
  templateUrl: './next-section-button.component.html',
  styleUrl: './next-section-button.component.scss',
})
export class NextSectionButtonComponent {
  private readonly sectionScroll = inject(SectionScrollService);
  private readonly i18n = inject(I18nService);

  @Input({ required: true }) currentSectionId!: string;

  next(): void {
    this.sectionScroll.goToNextSection(this.currentSectionId);
  }

  label(): string {
    return this.i18n.t('common.next');
  }
}
