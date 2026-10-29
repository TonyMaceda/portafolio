import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactSection } from './features/contact/contact-section';
import { ExperienceSection } from './features/experience/experience-section';
import { ExpertiseSection } from './features/expertise/expertise-section';
import { ProjectsSection } from './features/projects/projects-section';
import { ServicesSection } from './features/services/services-section';
import { TechnologiesSection } from './features/technologies/technologies-section';
import { WorkApproachSection } from './features/work-approach/work-approach-section';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ContactSection,
    ExperienceSection,
    ExpertiseSection,
    ProjectsSection,
    ServicesSection,
    TechnologiesSection,
    WorkApproachSection,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
