import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the portfolio introduction', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hola, soy Antony.');
    expect(compiled.querySelector('a.skip-link[href="#contenido-principal"]')).toBeTruthy();
    expect(compiled.querySelector('main#contenido-principal[tabindex="-1"]')).toBeTruthy();
    expect(compiled.textContent).toContain('Cochabamba, Bolivia');
  });

  it('should render CV-based portfolio sections', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('#tecnologias .technology-group').length).toBeGreaterThan(0);
    expect(compiled.querySelectorAll('#proyectos .project-card')).toHaveLength(4);
    expect(compiled.querySelectorAll('#proyectos .project-perspective')).toHaveLength(8);
    expect(compiled.querySelectorAll('#servicios .service-card')).toHaveLength(4);
    expect(compiled.querySelectorAll('#experiencia .experience-item')).toHaveLength(4);
    expect(compiled.querySelector('#experiencia')?.textContent).toContain('Feb 2025');
    expect(compiled.querySelector('#experiencia time[datetime="2025-02"]')?.textContent).toBe(
      'Feb 2025',
    );
    expect(compiled.querySelectorAll('#metodologia .work-step')).toHaveLength(4);
    expect(compiled.querySelector('#formacion')).toBeNull();
  });

  it('should not disclose former employers in project descriptions', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const projectText = (fixture.nativeElement as HTMLElement)
      .querySelector('#proyectos')
      ?.textContent?.toLowerCase();

    expect(projectText).not.toContain('gnp seguros');
    expect(projectText).not.toContain('telefónica');
    expect(projectText).not.toContain('interfase');
    expect(projectText).not.toContain('sim s.r.l.');
  });

  it('should provide working navigation targets', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const targetIds = new Set(
      Array.from(compiled.querySelectorAll('[id]'), (element) => element.id),
    );
    const fragmentLinks = Array.from(compiled.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));

    expect(fragmentLinks.length).toBeGreaterThan(0);
    expect(fragmentLinks.every((link) => targetIds.has(link.hash.slice(1)))).toBe(true);
    expect(targetIds.size).toBe(compiled.querySelectorAll('[id]').length);
    expect(compiled.querySelector('nav a[href="#areas-expertise"]')?.textContent).toContain(
      'Especialidades',
    );
  });

  it('should provide direct contact links from the CV', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(
      compiled.querySelector<HTMLAnchorElement>('#contacto a[href^="mailto:"]')?.href,
    ).toContain('antony.maceda.choque@gmail.com');
    expect(
      compiled.querySelector<HTMLAnchorElement>('#contacto a[href*="linkedin.com"]')?.href,
    ).toContain('antony-maceda-choque-880604237');
    const linkedInLink = compiled.querySelector<HTMLAnchorElement>(
      '#contacto a[href*="linkedin.com"]',
    );
    expect(linkedInLink?.target).toBe('_blank');
    expect(linkedInLink?.rel).toContain('noopener');
    expect(linkedInLink?.rel).toContain('noreferrer');
  });
});
