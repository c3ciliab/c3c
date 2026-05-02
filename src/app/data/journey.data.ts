import { JourneyItem } from '../core/models/journey-item.model';

export const JOURNEY_DATA: JourneyItem[] = [
  {
    id: 'ceva',
    period: '2025 - 2026',
    title: 'Designer Studio IHM',
    company: 'Ceva Santé Animale',
    summary: 'Conception et optimisation d’interfaces pour des dashboards, workshops UX, prototypes HTML et structuration de design system.',
    tags: ['Dashboard', 'UX/UI', 'HTML prototype'],
  },
  {
    id: 'drveto',
    period: '2025',
    title: 'Développeuse Front-End / UX UI',
    company: 'Alcyon / DrVeto',
    summary: 'Modernisation d’application cloud, Angular, responsive, maquettes Figma, structuration de bonnes pratiques CSS.',
    tags: ['Angular', 'PrimeNG', 'Responsive'],
  },
  {
    id: 'naxos',
    period: '2024',
    title: 'Intégratrice Front-End',
    company: 'Naxos / Century 21',
    summary: 'Refonte CRM et application mobile conseiller à partir de maquettes Figma.',
    tags: ['Angular', 'CRM', 'Mobile'],
  },
  {
    id: 'hager',
    period: '2018 - 2022',
    title: 'Intégratrice Front-End / UX UI',
    company: 'Hager Controls',
    summary: 'Conception et intégration d’interfaces applicatives, migration AngularJS vers Angular, UX multi-devices.',
    tags: ['Angular', 'UX/UI', 'Industrial'],
  },
];
