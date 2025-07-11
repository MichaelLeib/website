import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { CVData } from "../models/cv.model";
import { UiLabels } from "../models/ui-labels.interface";
import { CvDataService } from "../services/cv-data.service";
import { UiLabelsService } from "../services/ui-labels.service";

@Component({
  selector: "app-contact-section",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="contact"
      class="contact-section section"
    >
      <div class="container">
        <h2 class="section-title fade-in">
          {{ labels.sections.getInTouch }}
        </h2>
        <p
          class="section-subtitle fade-in"
          [style.animation-delay]="'0.2s'"
        >
          {{ labels.sections.contactSubtitle }}
        </p>

        <div
          class="contact-content"
          *ngIf="cvData$ | async as cvData"
        >
          <div
            class="contact-info glass-card fade-in"
            [style.animation-delay]="'0.4s'"
          >
            <h3>{{ labels.contact.workTogether }}</h3>
            <p>
              {{ labels.contact.workTogetherDescription }}
            </p>

            <div class="contact-links">
              <a
                [href]="'mailto:' + cvData.personalInfo.email"
                class="contact-link"
              >
                <div class="contact-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                    />
                  </svg>
                </div>
                <div class="contact-info-text">
                  <span class="contact-label">{{ labels.contact.email }}</span>
                  <span class="contact-value">{{
                    cvData.personalInfo.email
                  }}</span>
                </div>
              </a>

              <a
                [href]="cvData.personalInfo.linkedin"
                target="_blank"
                class="contact-link"
              >
                <div class="contact-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                </div>
                <div class="contact-info-text">
                  <span class="contact-label">{{
                    labels.contact.linkedin
                  }}</span>
                  <span class="contact-value">{{
                    labels.contact.connectWithMe
                  }}</span>
                </div>
              </a>

              <a
                [href]="cvData.personalInfo.github"
                target="_blank"
                class="contact-link"
              >
                <div class="contact-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </div>
                <div class="contact-info-text">
                  <span class="contact-label">{{ labels.contact.github }}</span>
                  <span class="contact-value">{{
                    labels.contact.viewMyCode
                  }}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ["./contact-section.component.scss"],
})
export class ContactSectionComponent {
  cvData$: Observable<CVData>;
  labels: UiLabels = {
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
      contactSubtitle:
        "Ready to collaborate on your next project? Let's connect!",
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

  constructor(
    private cvDataService: CvDataService,
    private uiLabelsService: UiLabelsService
  ) {
    this.cvData$ = this.cvDataService.getCVData();

    // Subscribe to labels and update the property directly
    this.uiLabelsService.getLabels().subscribe((labels) => {
      if (labels) {
        this.labels = labels;
      }
    });
  }
}
