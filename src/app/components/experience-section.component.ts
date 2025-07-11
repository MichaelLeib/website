import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Experience } from "../models/cv.model";
import { UiLabels } from "../models/ui-labels.interface";
import { CvDataService } from "../services/cv-data.service";
import { UiLabelsService } from "../services/ui-labels.service";

@Component({
  selector: "app-experience-section",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="experience"
      class="experience-section section"
    >
      <div
        class="container"
        *ngIf="labels$ | async as labels"
      >
        <h2 class="section-title fade-in">
          {{
            labels.sections.professionalExperience || "Professional Experience"
          }}
        </h2>
        <p
          class="section-subtitle fade-in"
          [style.animation-delay]="'0.2s'"
        >
          {{
            labels.sections.experienceSubtitle ||
              "My professional journey through different roles and companies"
          }}
        </p>

        <div
          class="timeline"
          *ngIf="experience$ | async as experiences"
        >
          <div
            class="timeline-item"
            *ngFor="let exp of experiences; let i = index; let isLast = last"
            [class.is-current]="!exp.endDate"
            [style.animation-delay]="0.4 + i * 0.2 + 's'"
          >
            <div class="timeline-marker">
              <div class="marker-dot"></div>
              <div
                class="marker-line"
                *ngIf="!isLast"
              ></div>
            </div>
            <div class="timeline-content glass-card">
              <div class="experience-header">
                <h3 class="position">{{ exp.position }}</h3>
                <div class="period">
                  <span class="start-date">{{ exp.startDate }}</span>
                  <span class="separator">—</span>
                  <span class="end-date">{{
                    exp.endDate || labels.sections.present || "Present"
                  }}</span>
                </div>
              </div>
              <h4 class="company">{{ exp.company }}</h4>
              <ul class="description-list">
                <li *ngFor="let desc of exp.description">{{ desc }}</li>
              </ul>
              <div
                class="technologies"
                *ngIf="exp.technologies && exp.technologies.length > 0"
              >
                <span
                  class="tech-tag"
                  *ngFor="let tech of exp.technologies"
                  >{{ tech }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ["./experience-section.component.scss"],
})
export class ExperienceSectionComponent implements OnInit {
  experience$: Observable<Experience[]>;
  labels$: Observable<UiLabels>;

  constructor(
    private cvDataService: CvDataService,
    private uiLabelsService: UiLabelsService
  ) {
    this.experience$ = this.cvDataService.getExperience();
    this.labels$ = this.uiLabelsService.getLabels();
  }

  ngOnInit(): void {}
}
