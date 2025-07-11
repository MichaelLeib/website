import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Skill } from "../models/cv.model";
import { UiLabels } from "../models/ui-labels.interface";
import { CvDataService } from "../services/cv-data.service";
import { UiLabelsService } from "../services/ui-labels.service";

@Component({
  selector: "app-skills-section",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="skills"
      class="skills-section section"
    >
      <div class="container">
        <h2 class="section-title fade-in">
          {{ labels.sections.skillsExpertise }}
        </h2>
        <p
          class="section-subtitle fade-in"
          [style.animation-delay]="'0.2s'"
        >
          {{ labels.sections.skillsSubtitle }}
        </p>

        <div class="skills-grid">
          <div
            class="skills-category fade-in"
            [style.animation-delay]="'0.4s'"
          >
            <div class="category-header">
              <div class="category-icon frontend-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  />
                </svg>
              </div>
              <h3>
                {{ labels.skillCategories.frontend }}
              </h3>
            </div>
            <div class="skills-list">
              <div
                class="skill-item"
                *ngFor="let skill of frontendSkills; let i = index"
                [style.animation-delay]="0.6 + i * 0.1 + 's'"
              >
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}/10</span>
                </div>
                <div class="skill-bar">
                  <div
                    class="skill-progress"
                    [style.width.%]="skill.level * 10"
                    [style.--target-width]="skill.level * 10 + '%'"
                    [style.animation-delay]="0.8 + i * 0.1 + 's'"
                  ></div>
                </div>
                <div
                  class="skill-years"
                  *ngIf="skill.years"
                >
                  {{ skill.years }} years
                </div>
              </div>
            </div>
          </div>

          <div
            class="skills-category fade-in"
            [style.animation-delay]="'0.5s'"
          >
            <div class="category-header">
              <div class="category-icon backend-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"
                  />
                </svg>
              </div>
              <h3>
                {{ labels.skillCategories.backend }}
              </h3>
            </div>
            <div class="skills-list">
              <div
                class="skill-item"
                *ngFor="let skill of backendSkills; let i = index"
                [style.animation-delay]="0.7 + i * 0.1 + 's'"
              >
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}/10</span>
                </div>
                <div class="skill-bar">
                  <div
                    class="skill-progress"
                    [style.width.%]="skill.level * 10"
                    [style.--target-width]="skill.level * 10 + '%'"
                    [style.animation-delay]="0.9 + i * 0.1 + 's'"
                  ></div>
                </div>
                <div
                  class="skill-years"
                  *ngIf="skill.years"
                >
                  {{ skill.years }} years
                </div>
              </div>
            </div>
          </div>

          <div
            class="skills-category fade-in"
            [style.animation-delay]="'0.6s'"
          >
            <div class="category-header">
              <div class="category-icon general-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"
                  />
                </svg>
              </div>
              <h3>
                {{ labels.skillCategories.general }}
              </h3>
            </div>
            <div class="skills-list">
              <div
                class="skill-item"
                *ngFor="let skill of generalSkills; let i = index"
                [style.animation-delay]="0.8 + i * 0.1 + 's'"
              >
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}/10</span>
                </div>
                <div class="skill-bar">
                  <div
                    class="skill-progress"
                    [style.width.%]="skill.level * 10"
                    [style.--target-width]="skill.level * 10 + '%'"
                    [style.animation-delay]="1.0 + i * 0.1 + 's'"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ["./skills-section.component.scss"],
})
export class SkillsSectionComponent implements OnInit {
  frontendSkills: Skill[] = [];
  backendSkills: Skill[] = [];
  generalSkills: Skill[] = [];
  labels: UiLabels = {} as UiLabels;

  constructor(
    private cvDataService: CvDataService,
    private uiLabelsService: UiLabelsService
  ) {}

  ngOnInit(): void {
    this.uiLabelsService.getLabels().subscribe((labels) => {
      this.labels = labels;
    });

    this.cvDataService.getSkillsByCategory("frontend").subscribe((skills) => {
      this.frontendSkills = skills;
    });

    this.cvDataService.getSkillsByCategory("backend").subscribe((skills) => {
      this.backendSkills = skills;
    });

    this.cvDataService.getSkillsByCategory("general").subscribe((skills) => {
      this.generalSkills = skills;
    });
  }
}
