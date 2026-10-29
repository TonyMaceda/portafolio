import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {
  protected readonly email = 'antony.maceda.choque@gmail.com';
  protected readonly linkedInUrl = 'https://www.linkedin.com/in/antony-maceda-choque-880604237/';
  protected readonly emailHref =
    'mailto:antony.maceda.choque@gmail.com?subject=Consulta%20profesional';
}
