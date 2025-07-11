import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

export type Language = "en" | "de";

@Injectable({
  providedIn: "root",
})
export class LanguageService {
  private readonly storageKey = "cv-website-language";
  private currentLanguageSubject = new BehaviorSubject<Language>(
    this.getInitialLanguage()
  );

  constructor() {}

  private getInitialLanguage(): Language {
    // Check localStorage first
    const stored = localStorage.getItem(this.storageKey) as Language;
    if (stored && (stored === "en" || stored === "de")) {
      return stored;
    }

    // Fall back to browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("de")) {
      return "de";
    }

    // Default to English
    return "en";
  }

  getCurrentLanguage(): Observable<Language> {
    return this.currentLanguageSubject.asObservable();
  }

  getCurrentLanguageValue(): Language {
    return this.currentLanguageSubject.value;
  }

  setLanguage(language: Language): void {
    this.currentLanguageSubject.next(language);
    localStorage.setItem(this.storageKey, language);
  }

  toggleLanguage(): void {
    const currentLang = this.getCurrentLanguageValue();
    const newLang: Language = currentLang === "en" ? "de" : "en";
    this.setLanguage(newLang);
  }

  getLanguageLabel(lang: Language): string {
    return lang === "en" ? "English" : "Deutsch";
  }
}
