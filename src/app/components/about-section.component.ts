import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CVData } from "../models/cv.model";
import { UiLabels } from "../models/ui-labels.interface";
import { CvDataService } from "../services/cv-data.service";
import { UiLabelsService } from "../services/ui-labels.service";

@Component({
  selector: "app-about-section",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="about"
      class="about-section section"
    >
      <div class="container">
        <div
          class="about-content"
          *ngIf="cvData$ | async as cvData"
        >
          <div
            class="about-text"
            *ngIf="labels$ | async as labels"
          >
            <h2 class="section-title fade-in">
              {{ labels.sections.aboutMe || "About Me" }}
            </h2>
            <p
              class="about-description fade-in"
              [style.animation-delay]="'0.2s'"
            >
              {{ cvData.about }}
            </p>
            <div
              class="about-stats fade-in"
              [style.animation-delay]="'0.4s'"
            >
              <div class="stat-card glass-card">
                <h3>7+</h3>
                <p>{{ labels.stats.yearsExperience || "Years Experience" }}</p>
              </div>
              <div class="stat-card glass-card">
                <h3>15+</h3>
                <p>
                  {{ labels.stats.projectsCompleted || "Projects Completed" }}
                </p>
              </div>
              <div class="stat-card glass-card">
                <h3>3</h3>
                <p>{{ labels.stats.languagesFluent || "Languages Fluent" }}</p>
              </div>
            </div>
          </div>
          <div
            class="about-visual fade-in"
            [style.animation-delay]="'0.6s'"
          >
            <div class="profile-card glass-card">
              <div class="profile-image">
                <div class="image-placeholder">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="60"
                      fill="url(#profileGradient)"
                    />
                    <path
                      d="M60 60c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20z"
                      fill="white"
                      opacity="0.8"
                    />
                    <path
                      d="M30 100c0-16.569 13.431-30 30-30s30 13.431 30 30"
                      fill="white"
                      opacity="0.8"
                    />
                    <defs>
                      <linearGradient
                        id="profileGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style="stop-color:#4facfe"
                        />
                        <stop
                          offset="100%"
                          style="stop-color:#00f2fe"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div class="profile-info">
                <h3>{{ cvData.personalInfo.name }}</h3>
                <p>{{ cvData.personalInfo.title }}</p>
                <div class="social-links">
                  <a
                    href="mailto:{{ cvData.personalInfo.email }}"
                    class="social-link"
                    title="Email"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                      />
                    </svg>
                  </a>
                  <a
                    [href]="cvData.personalInfo.linkedin"
                    class="social-link"
                    title="LinkedIn"
                    target="_blank"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                      />
                    </svg>
                  </a>
                  <a
                    [href]="cvData.personalInfo.github"
                    class="social-link"
                    title="GitHub"
                    target="_blank"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ["./about-section.component.scss"],
})
export class AboutSectionComponent implements OnInit {
  cvData$: Observable<CVData>;
  labels$: Observable<UiLabels>;

  constructor(
    private cvDataService: CvDataService,
    private uiLabelsService: UiLabelsService
  ) {
    this.cvData$ = this.cvDataService.getCVData();
    this.labels$ = this.uiLabelsService.getLabels();
  }

  ngOnInit(): void {}
}
