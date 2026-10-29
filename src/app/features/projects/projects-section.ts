import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Project {
  category: string;
  title: string;
  businessDescription: string;
  technicalDescription: string;
  outcome?: string;
  technologies: string[];
}

@Component({
  selector: 'app-projects-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
})
export class ProjectsSection {
  protected readonly projects: Project[] = [
    {
      category: 'Servicios financieros',
      title: 'Aplicaciones para procesos de crédito',
      businessDescription:
        'Aplicaciones que ayudan a gestionar créditos, cronogramas de pago y documentos, con accesos acordes al rol de cada persona.',
      technicalDescription:
        'Desarrollo full stack con Spring Boot y Angular; implementación de autenticación, autorización y control de acceso basado en roles (RBAC), además de componentes reutilizables.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'RBAC'],
    },
    {
      category: 'Modernización de plataformas',
      title: 'Migración automatizada de portales y contenidos',
      businessDescription:
        'La modernización de un portal puede hacerse de forma más ordenada y con menos trabajo manual, ayudando a mantener disponibles los contenidos durante la transición.',
      technicalDescription:
        'Servicios Java y Spring Boot para generar HTML estático a partir de páginas de portal, gestionar repositorios y archivos, y registrar y auditar envíos de formularios con detección de IP repetida.',
      outcome: 'La automatización redujo aproximadamente un 30 % el esfuerzo de migración.',
      technologies: ['Java', 'Spring Boot', 'Liferay DXP', 'HTML estático'],
    },
    {
      category: 'Seguros · Integración de datos',
      title: 'Integración configurable de modelos de datos',
      businessDescription:
        'Conectar fuentes de información distintas se vuelve más sencillo cuando las reglas de transformación se pueden reutilizar y adaptar, sin repetir trabajo en cada integración.',
      technicalDescription:
        'Integración con SDK de Palantir Foundry para almacenamiento, modelos de objetos, orquestación de pipelines y transformaciones. Desarrollo de una librería Java configurable de mapeo para estandarizar modelos entre microservicios.',
      outcome:
        'La librería centralizó transformaciones y redujo la duplicación de lógica de integración.',
      technologies: ['Java', 'Spring Cloud', 'WebFlux', 'Foundry SDK'],
    },
    {
      category: 'Gestión documental · Firma digital',
      title: 'Servicios de documentos y firma electrónica',
      businessDescription:
        'Soluciones que permiten a distintas organizaciones gestionar documentos y completar procesos de firma electrónica con servicios adaptables a sus necesidades.',
      technicalDescription:
        'APIs REST y microservicios configurables para el ciclo de vida documental y la orquestación de flujos de firma, con arquitectura independiente del proveedor para soportar múltiples integraciones.',
      technologies: ['Java', 'Spring Boot', 'REST', 'Microservicios'],
    },
  ];
}
