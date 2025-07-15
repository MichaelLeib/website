import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, shareReplay, switchMap, tap } from "rxjs";
import { CVData, Experience, Project, Skill } from "../models/cv.model";
import { Language, LanguageService } from "./language.service";

@Injectable({
  providedIn: "root",
})
export class CvDataService {
  private cvDataCache = new Map<Language, Observable<CVData>>();

  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {}

  private loadCVData(language: Language): Observable<CVData> {
    if (!this.cvDataCache.has(language)) {
      const dataUrl = `assets/data/cv-data-${language}.json`;
      console.log("Loading data from", dataUrl);
      const data$ = this.http.get<CVData>(dataUrl).pipe(
        tap((data: CVData) => console.log("Data loaded", data)),
        shareReplay(1) // Cache the result
      );
      this.cvDataCache.set(language, data$);
    }
    return this.cvDataCache.get(language)!;
  }

  getCVData(): Observable<CVData> {
    return this.languageService
      .getCurrentLanguage()
      .pipe(switchMap((language) => this.loadCVData(language)));
  }

  getSkillsByCategory(
    category: "frontend" | "backend" | "general"
  ): Observable<Skill[]> {
    return this.getCVData().pipe(map((data) => data.skills[category]));
  }

  getExperience(): Observable<Experience[]> {
    return this.getCVData().pipe(switchMap((data) => [data.experience]));
  }

  getProjects(): Observable<Project[]> {
    return this.getCVData().pipe(switchMap((data) => [data.projects]));
  }
}
