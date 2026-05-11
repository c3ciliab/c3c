import { NavItem } from '../core/models/nav-item.model';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', labelKey: 'nav.home', order: 1 },
  { id: 'about', labelKey: 'nav.about', order: 2 },
  { id: 'services', labelKey: 'nav.services', order: 3,
    children: [
      {
        id: 'all-services',
        labelKey: 'nav.servicesFull',
        route: 'all-services',
      },
    ],
   },
  { id: 'portfolio', labelKey: 'nav.portfolio', order: 4,
    children: [
      {
        id: 'full-portfolio',
        labelKey: 'nav.portfolioFull',
        route: 'full-portfolio',
      },
    ],
   },
  { id: 'journey', labelKey: 'nav.journey', order: 5 },
  { id: 'contact', labelKey: 'nav.contact', order: 6 },
];
