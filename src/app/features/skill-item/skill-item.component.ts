import { Component, Input, inject } from '@angular/core';
import { I18nService } from '../../core/services/i18n.service';
import { SkillItem } from '../../core/models/service-item.model';

@Component({
  selector: 'app-skill-item',
  imports: [],
  templateUrl: './skill-item.component.html',
  styleUrl: './skill-item.component.scss',
})
export class SkillItemComponent {
  @Input({ required: true }) skill!: SkillItem;

  private readonly i18n = inject(I18nService);

  t(key: string): string {
    return this.i18n.t(key);
  }

  tList(key: string): string[] {
    return this.i18n.tList(key);
  }
}
