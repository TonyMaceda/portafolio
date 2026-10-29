import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Experience {
  startDate: string;
  startLabel: string;
  endDate: string;
  endLabel: string;
  role: string;
  area: string;
  summary: string;
}

@Component({
  selector: 'app-experience-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience-section.html',
  styleUrl: './experience-section.scss',
})
export class ExperienceSection {
  protected readonly experience: Experience[] = [
    {
      startDate: '2025-02',
      startLabel: 'Feb 2025',
      endDate: '2026-06',
      endLabel: 'Jun 2026',
      role: 'Ingeniero de software full stack',
      area: 'Seguros · Plataformas de datos',
      summary:
        'Desarrollé microservicios empresariales e integraciones de datos, y diseñé una librería reutilizable para estandarizar transformaciones entre servicios.',
    },
    {
      startDate: '2023-12',
      startLabel: 'Dic 2023',
      endDate: '2025-02',
      endLabel: 'Feb 2025',
      role: 'Ingeniero de software full stack',
      area: 'Modernización de plataformas',
      summary:
        'Automaticé migraciones de portales y contenidos, y desarrollé servicios para gestionar archivos, monitorear formularios y apoyar la continuidad operativa.',
    },
    {
      startDate: '2020-12',
      startLabel: 'Dic 2020',
      endDate: '2023-12',
      endLabel: 'Dic 2023',
      role: 'Desarrollador de software',
      area: 'Gestión documental · Firma electrónica',
      summary:
        'Desarrollé APIs y microservicios para la gestión documental y la orquestación de procesos de firma, con integraciones adaptables a diferentes proveedores.',
    },
    {
      startDate: '2019-11',
      startLabel: 'Nov 2019',
      endDate: '2020-12',
      endLabel: 'Dic 2020',
      role: 'Desarrollador de software full stack',
      area: 'Aplicaciones financieras',
      summary:
        'Construí aplicaciones web para procesos de crédito, cronogramas de pago y administración documental, con autenticación y permisos por rol.',
    },
  ];
}
