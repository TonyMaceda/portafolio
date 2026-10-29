import { ChangeDetectionStrategy, Component } from '@angular/core';

interface WorkStep {
  number: string;
  title: string;
  description: string;
  technicalDetail: string;
}

@Component({
  selector: 'app-work-approach-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './work-approach-section.html',
  styleUrl: './work-approach-section.scss',
})
export class WorkApproachSection {
  protected readonly steps: WorkStep[] = [
    {
      number: '01',
      title: 'Entender el reto',
      description:
        'Aclarar qué necesita el negocio, quién usará la solución y qué resultado se espera.',
      technicalDetail: 'Análisis funcional y técnico',
    },
    {
      number: '02',
      title: 'Definir una solución',
      description:
        'Acordar el alcance y una estructura que responda a la necesidad actual sin cerrar el camino a cambios futuros.',
      technicalDetail: 'Arquitectura y diseño de dominio',
    },
    {
      number: '03',
      title: 'Construir y validar',
      description:
        'Desarrollar la solución por partes y revisar que cada componente cumpla su propósito.',
      technicalDetail: 'Desarrollo full stack y pruebas',
    },
    {
      number: '04',
      title: 'Entregar y mejorar',
      description:
        'Acompañar la puesta en marcha y utilizar lo aprendido para orientar las siguientes mejoras.',
      technicalDetail: 'Soporte en producción y mejora continua',
    },
  ];
}
