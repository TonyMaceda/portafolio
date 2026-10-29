import { ChangeDetectionStrategy, Component } from '@angular/core';

interface TechnologyGroup {
  category: string;
  technologies: string[];
}

@Component({
  selector: 'app-technologies-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './technologies-section.html',
  styleUrl: './technologies-section.scss',
})
export class TechnologiesSection {
  protected readonly groups: TechnologyGroup[] = [
    {
      category: 'Backend y APIs',
      technologies: [
        'Java',
        'Spring Boot',
        'Spring Cloud',
        'WebFlux',
        'Hibernate',
        'JAX-RS',
        'REST',
      ],
    },
    {
      category: 'Frontend',
      technologies: ['Angular', 'AngularJS', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      category: 'Mensajería e integración',
      technologies: ['Apache Kafka', 'ActiveMQ', 'JSON', 'Integración de APIs'],
    },
    {
      category: 'Bases de datos',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'IndexedDB'],
    },
    {
      category: 'Plataformas empresariales',
      technologies: ['Palantir Foundry', 'Liferay DXP', 'JackRabbit', 'PSPDFKit', 'Apache POI'],
    },
    {
      category: 'Pruebas y calidad',
      technologies: ['JUnit', 'Mockito', 'Pruebas unitarias', 'TDD'],
    },
    {
      category: 'Cloud y entrega',
      technologies: ['Docker', 'Git', 'AWS', 'Azure', 'Google Cloud (GCP)', 'CI/CD'],
    },
  ];
}
