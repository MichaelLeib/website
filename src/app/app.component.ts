import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CVData } from "src/app/models/cv.model";
import { AboutSectionComponent } from "./components/about-section.component";
import { ContactSectionComponent } from "./components/contact-section.component";
import { ExperienceSectionComponent } from "./components/experience-section.component";
import { LanguageSwitcherComponent } from "./components/language-switcher.component";
import { ProjectsSectionComponent } from "./components/projects-section.component";
import { SkillsSectionComponent } from "./components/skills-section.component";
import { UiLabels } from "./models/ui-labels.interface";
import { CvDataService } from "./services/cv-data.service";
import { UiLabelsService } from "./services/ui-labels.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    AboutSectionComponent,
    ContactSectionComponent,
    SkillsSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    LanguageSwitcherComponent,
  ],
  template: `
    <div class="app-container">
      <header class="header">
        <nav class="nav">
          <div class="nav-brand">
            <h1>{{ title }}</h1>
          </div>
          <div class="nav-center">
            <a
              href="#about"
              class="nav-link"
              >{{ labels.navigation.about }}</a
            >
            <a
              href="#skills"
              class="nav-link"
              >{{ labels.navigation.skills }}</a
            >
            <a
              href="#experience"
              class="nav-link"
              >{{ labels.navigation.experience }}</a
            >
            <a
              href="#projects"
              class="nav-link"
              >{{ labels.navigation.projects }}</a
            >
            <a
              href="#contact"
              class="nav-link"
              >{{ labels.navigation.contact }}</a
            >
          </div>
          <div class="nav-actions">
            <app-language-switcher></app-language-switcher>
          </div>
        </nav>
      </header>

      <main class="main">
        <section
          id="hero"
          class="hero"
        >
          <div class="hero-content">
            <h1 class="hero-title">{{ cvData.personalInfo.name }}</h1>
            <h2 class="hero-subtitle">
              {{ cvData.personalInfo.title }}
            </h2>
            <p class="hero-description">{{ labels.hero.description }}</p>
            <div class="hero-actions">
              <a
                href="#contact"
                class="btn btn-primary"
                >{{ labels.buttons.getInTouch }}</a
              >
              <a
                href="#projects"
                class="btn btn-secondary"
                >{{ labels.buttons.viewProjects }}</a
              >
            </div>
          </div>
          <div class="hero-visual">
            <div class="floating-cards">
              <div class="card card-1">Angular</div>
              <div class="card card-2">React</div>
              <div class="card card-3">.NET</div>
              <div class="card card-4">TypeScript</div>
            </div>
          </div>
        </section>

        <app-about-section></app-about-section>
        <app-skills-section></app-skills-section>
        <app-experience-section></app-experience-section>
        <app-projects-section></app-projects-section>
        <app-contact-section></app-contact-section>
      </main>

      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <p>
              &copy; 2024 Michael Leib. Built with Angular and modern web
              technologies.
            </p>
            <div class="footer-tech">
              <span>Made with</span>
              <span class="tech-heart">❤️</span>
              <span>using Angular, TypeScript & SCSS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  `,
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Michael Leib - Full Stack Developer";
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

  cvData!: CVData;

  constructor(
    private uiLabelsService: UiLabelsService,
    private cvDataService: CvDataService
  ) {
    // Subscribe to labels and update the property directly
    this.uiLabelsService.getLabels().subscribe((labels) => {
      if (labels) {
        this.labels = labels;
      }
    });

    this.cvDataService.getCVData().subscribe((cvData) => {
      if (cvData) {
        this.cvData = cvData;
      }
    });
  }
}
