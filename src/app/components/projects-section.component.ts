import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Project } from "../models/cv.model";
import { UiLabels } from "../models/ui-labels.interface";
import { CvDataService } from "../services/cv-data.service";
import { UiLabelsService } from "../services/ui-labels.service";

@Component({
  selector: "app-projects-section",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="projects"
      class="projects-section section"
    >
      <div
        class="container"
        *ngIf="labels$ | async as labels"
      >
        <h2 class="section-title fade-in">
          {{ labels.sections.featuredProjects || "Featured Projects" }}
        </h2>
        <p
          class="section-subtitle fade-in"
          [style.animation-delay]="'0.2s'"
        >
          {{
            labels.sections.projectsSubtitle ||
              "A selection of key projects showcasing my technical expertise and problem-solving abilities"
          }}
        </p>

        <div
          class="projects-grid"
          *ngIf="projects$ | async as projects"
        >
          <div
            class="project-card glass-card"
            *ngFor="let project of projects; let i = index"
            [style.animation-delay]="0.4 + i * 0.2 + 's'"
          >
            <div class="project-header">
              <h3 class="project-name">{{ project.name }}</h3>
              <span class="project-period">{{ project.period }}</span>
            </div>

            <div class="project-company">{{ project.company }}</div>

            <div
              class="project-role"
              *ngIf="project.role"
            >
              <strong>{{ labels.projects.role || "Role:" }}</strong>
              {{ project.role }}
            </div>

            <p class="project-description">{{ project.description }}</p>

            <div
              class="project-highlights"
              *ngIf="project.highlights && project.highlights.length > 0"
            >
              <h4>
                {{ labels.projects.keyAchievements || "Key Achievements:" }}
              </h4>
              <ul>
                <li *ngFor="let highlight of project.highlights">
                  {{ highlight }}
                </li>
              </ul>
            </div>

            <div class="project-technologies">
              <span
                class="tech-tag"
                *ngFor="let tech of project.technologies"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ["./projects-section.component.scss"],
})
export class ProjectsSectionComponent implements OnInit {
  projects$: Observable<Project[]>;
  labels$: Observable<UiLabels>;

  constructor(
    private cvDataService: CvDataService,
    private uiLabelsService: UiLabelsService
  ) {
    this.projects$ = this.cvDataService.getProjects();
    this.labels$ = this.uiLabelsService.getLabels();
  }

  ngOnInit(): void {}
}
