import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ExpertiseArea {
  number: string;
  title: string;
  description: string;
  keywords: string[];
}

@Component({
  selector: 'app-expertise-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './expertise-section.html',
  styleUrl: './expertise-section.scss',
})
export class ExpertiseSection {
  protected readonly areas: ExpertiseArea[] = [
    {
      number: '01',
      title: 'Backend y microservicios',
      description:
        'Servicios de negocio y APIs diseñados para integrar dominios empresariales y facilitar la evolución de sus aplicaciones.',
      keywords: ['Java', 'Spring Boot', 'Spring Cloud', 'REST'],
    },
    {
      number: '02',
      title: 'Desarrollo full stack',
      description:
        'Desarrollo de interfaces e integración con servicios backend para construir aplicaciones web completas.',
      keywords: ['Angular', 'TypeScript', 'Integración frontend'],
    },
    {
      number: '03',
      title: 'Plataformas e integración de datos',
      description:
        'Conexión de sistemas, mensajería y modelos de datos empresariales con componentes configurables y reutilizables.',
      keywords: ['Palantir Foundry', 'Kafka', 'ActiveMQ', 'Bases de datos'],
    },
    {
      number: '04',
      title: 'Calidad y modernización',
      description:
        'Evolución de plataformas existentes con pruebas, automatización y prácticas de ingeniería orientadas al mantenimiento.',
      keywords: ['JUnit', 'Mockito', 'TDD', 'CI/CD'],
    },
  ];
}
