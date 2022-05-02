import { NavigationItem } from 'src/app/shared/models/navigation-item.model';

export const navigationItems: NavigationItem[] = [
  {
    name: 'Speisekarte',
    link: '/admin',
    linkActiveOptions: {
      exact: true,
    },
  },
  {
    name: 'Aktuelles',
    link: '/admin/news',
    linkActiveOptions: {
      exact: true,
    },
  },
];
