import { ServiceItem, SkillItem } from '../core/models/service-item.model';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'frontend',
    titleKey: 'services.frontend.title',
    textKey: 'services.frontend.text',
    tags: ['angular', 'typescript', 'SCSS'],
    icon: 'code',
  },
  {
    id: 'integration',
    titleKey: 'services.integration.title',
    textKey: 'services.integration.text',
    tags: ['HTML', 'responsive', 'design system'],
    icon: 'responsive',
  },
  {
    id: 'uxui',
    titleKey: 'services.uxui.title',
    textKey: 'services.uxui.text',
    tags: ['figma', 'wireframes', 'prototype'],
    icon: 'webdesign',
  },
  {
    id: 'systems',
    titleKey: 'services.systems.title',
    textKey: 'services.systems.text',
    tags: ['storybook', 'documentation', 'print'],
    icon: 'specs',
  },
];

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'poulpe',
    titleKey: 'about.skill.flex.title',
    textKey: 'about.skill.flex.text',
    class: 'left-b top-b',
  },
  {
    id: 'xp',
    titleKey: 'about.skill.xp.title',
    textKey: 'about.skill.xp.text',
    class: 'left-b bot-b',
  },
  {
    id: 'brain-l',
    titleKey: 'about.skill.discipline.title',
    textKey: 'about.skill.discipline.text',
    class: 'right-b top-b',
  },
  {
    id: 'brain-r',
    titleKey: 'about.skill.passion.title',
    textKey: 'about.skill.passion.text',
    class: 'right-b bot-b',
  },
];
