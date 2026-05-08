import { Component, Input, inject } from '@angular/core';
import { I18nService } from '../../../core/services/i18n.service';
import { SERVICES_DATA } from '../../../data/services.data';

@Component({
  selector: 'app-chip-tag',
  imports: [],
  templateUrl: './chip-tag.component.html',
  styleUrl: './chip-tag.component.scss',
})
export class ChipTagComponent {
  @Input({ required: true }) tag!: string;

  private readonly i18n = inject(I18nService);
  readonly services = SERVICES_DATA;

  t(key: string): string {
    return this.i18n.t(key);
  }
}
