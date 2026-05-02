import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { I18nDictionary } from '../models/i18n-dictionary.model';

export type AppLang = 'fr' | 'en';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly http = inject(HttpClient);

  private readonly currentLangSignal = signal<AppLang>('fr');
  private readonly dictionarySignal = signal<I18nDictionary>({});
  private readonly loadedSignal = signal(false);

  readonly lang = computed(() => this.currentLangSignal());
  readonly loaded = computed(() => this.loadedSignal());

  async init(langFromRoute?: string): Promise<void> {
    const browserLang = navigator.language.startsWith('fr') ? 'fr' : 'en';
    const savedLang = localStorage.getItem('app.lang') as AppLang | null;
    const routeLang = langFromRoute === 'en' ? 'en' : langFromRoute === 'fr' ? 'fr' : null;

    const lang = routeLang ?? savedLang ?? browserLang;
    await this.load(lang);
  }

  async setLang(lang: AppLang): Promise<void> {
    await this.load(lang);
    localStorage.setItem('app.lang', lang);
  }

  t(key: string): string {
    const dictionary = this.dictionarySignal();
    const value = key.split('.').reduce<unknown>((acc, part) => {
      if (acc && typeof acc === 'object' && part in acc) {
        return (acc as Record<string, unknown>)[part];
      }
      return undefined;
    }, dictionary);

    return typeof value === 'string' ? value : key;
  }

  tList(key: string): string[] {
    const value = this.resolveKey(key);
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];
  }

  private resolveKey(key: string): unknown {
    const dictionary = this.dictionarySignal();

    return key.split('.').reduce<unknown>((acc, part) => {
      if (acc && typeof acc === 'object' && part in acc) {
        return (acc as Record<string, unknown>)[part];
      }
      return undefined;
    }, dictionary);
  }

  private async load(lang: AppLang): Promise<void> {
    const dictionary = await firstValueFrom(
      this.http.get<I18nDictionary>(`assets/i18n/${lang}.json`),
    );

    this.currentLangSignal.set(lang);
    this.dictionarySignal.set(dictionary);
    this.loadedSignal.set(true);
  }
}
