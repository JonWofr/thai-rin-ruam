import { NavigationItem } from 'src/app/shared/models/navigation-item.model';

export const navigationItems: NavigationItem[] = [
  {
    name: 'Aktuelles',
    link: '/admin/news',
    linkActiveOptions: {
      exact: true,
    },
  },
  {
    name: 'Speisekarte',
    link: '/admin',
    linkActiveOptions: {
      exact: true,
    },
  },
];
