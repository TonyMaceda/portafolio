import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Service {
  title: string;
  businessDescription: string;
  technicalDescription: string;
  technologies: string[];
}

@Component({
  selector: 'app-services-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services-section.html',
  styleUrl: './services-section.scss',
})
export class ServicesSection {
  protected readonly services: Service[] = [
    {
      title: 'Aplicaciones web para procesos de negocio',
      businessDescription:
        'Centraliza tareas, información y seguimiento en una aplicación hecha para la forma de trabajar de tu equipo.',
      technicalDescription:
        'Desarrollo full stack con Angular y TypeScript en frontend, y Java con Spring Boot y APIs REST para servicios backend.',
      technologies: ['Angular', 'TypeScript', 'Java', 'Spring Boot'],
    },
    {
      title: 'APIs e integración de sistemas',
      businessDescription:
        'Conecta sistemas y fuentes de información para reducir tareas manuales y mantener los procesos coordinados.',
      technicalDescription:
        'Diseño de APIs REST y microservicios; integración con plataformas y mensajería usando tecnologías como Spring Cloud, Kafka y ActiveMQ.',
      technologies: ['REST', 'Spring Cloud', 'Kafka', 'ActiveMQ'],
    },
    {
      title: 'Modernización de plataformas existentes',
      businessDescription:
        'Actualiza sistemas heredados paso a paso, cuidando los contenidos y procesos que tu organización necesita mantener.',
      technicalDescription:
        'Migración de funcionalidad y contenidos de plataformas como Liferay DXP hacia servicios Java/Spring Boot y páginas HTML estáticas.',
      technologies: ['Java', 'Spring Boot', 'Liferay DXP', 'HTML'],
    },
    {
      title: 'Gestión documental y firma electrónica',
      businessDescription:
        'Organiza el recorrido de tus documentos y facilita procesos de firma adaptados a los proveedores que utilizas.',
      technicalDescription:
        'APIs REST y microservicios para gestión documental y orquestación de flujos de firma, con una arquitectura desacoplada del proveedor.',
      technologies: ['Java', 'REST', 'Microservicios', 'Integraciones'],
    },
  ];
}
