import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  BehaviorSubject,
  catchError,
  Observable,
  of,
  shareReplay,
  switchMap,
  tap,
} from "rxjs";
import { UiLabels } from "../models/ui-labels.interface";
import { Language, LanguageService } from "./language.service";

@Injectable({
  providedIn: "root",
})
export class UiLabelsService {
  private defaultLabels: UiLabels = {
    navigation: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    buttons: { getInTouch: "Get In Touch", viewProjects: "View Projects" },
    hero: {
      description:
        "Passionate about creating exceptional user experiences with modern technologies",
    },
    sections: {
      aboutMe: "About Me",
      skillsExpertise: "Skills & Expertise",
      skillsSubtitle: "Technical skills and expertise",
      professionalExperience: "Professional Experience",
      experienceSubtitle: "Professional journey",
      present: "Present",
      featuredProjects: "Featured Projects",
      projectsSubtitle: "Key projects",
      getInTouch: "Get In Touch",
      contactSubtitle: "Let's connect!",
    },
    skillCategories: {
      frontend: "Frontend",
      backend: "Backend",
      general: "General",
    },
    stats: {
      yearsExperience: "Years Experience",
      projectsCompleted: "Projects Completed",
      languagesFluent: "Languages Fluent",
    },
    projects: { role: "Role:", keyAchievements: "Key Achievements:" },
    contact: {
      workTogether: "Let's Work Together",
      workTogetherDescription: "I'm always interested in new opportunities.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      connectWithMe: "Connect with me",
      viewMyCode: "View my code",
    },
  };

  private labelsSubject = new BehaviorSubject<UiLabels>(this.defaultLabels);
  private cache = new Map<Language, UiLabels>();

  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {
    this.initializeLabels();
  }

  private initializeLabels(): void {
    // Subscribe to language changes and load corresponding UI labels
    this.languageService
      .getCurrentLanguage()
      .pipe(
        switchMap((language) => this.loadLabels(language)),
        tap((labels) => this.labelsSubject.next(labels)),
        catchError((error) => {
          console.error("Error loading labels:", error);
          // Keep using default labels on error
          this.labelsSubject.next(this.defaultLabels);
          return of(this.defaultLabels);
        })
      )
      .subscribe();
  }

  getLabels(): Observable<UiLabels> {
    return this.labelsSubject.asObservable();
  }

  private loadLabels(language: Language): Observable<UiLabels> {
    // Check cache first
    if (this.cache.has(language)) {
      return of(this.cache.get(language)!);
    }

    // Load from file
    const url = `assets/data/ui-labels-${language}.json`;

    return this.http.get<UiLabels>(url).pipe(
      tap((labels) => this.cache.set(language, labels)),
      shareReplay(1),
      catchError((error) => {
        console.error(`Failed to load labels for ${language}:`, error);
        // Return English labels as fallback
        if (language !== "en") {
          return this.http.get<UiLabels>("assets/data/ui-labels-en.json");
        }
        throw error;
      })
    );
  }
}
