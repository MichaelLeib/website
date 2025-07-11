import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Language, LanguageService } from "../services/language.service";

@Component({
  selector: "app-language-switcher",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="language-switcher"
      *ngIf="currentLanguage$ | async as currentLang"
    >
      <button
        class="lang-button"
        [class.active]="currentLang === 'en'"
        (click)="setLanguage('en')"
        title="Switch to English"
      >
        EN
      </button>
      <button
        class="lang-button"
        [class.active]="currentLang === 'de'"
        (click)="setLanguage('de')"
        title="Zu Deutsch wechseln"
      >
        DE
      </button>
    </div>
  `,
  styleUrls: ["./language-switcher.component.scss"],
})
export class LanguageSwitcherComponent {
  currentLanguage$: Observable<Language>;

  constructor(private languageService: LanguageService) {
    this.currentLanguage$ = this.languageService.getCurrentLanguage();
  }

  setLanguage(language: Language): void {
    this.languageService.setLanguage(language);
  }
}
