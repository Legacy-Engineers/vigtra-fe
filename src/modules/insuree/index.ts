import type { ModuleCfgDefinition } from '..';
import { InsureeRoutes } from './routes';

const DEFAULT_CFG: ModuleCfgDefinition = {
  name: 'Vigtra Insuree Module',
  description: 'insuree and more',
  version: '1.0.0',
  routes: InsureeRoutes,
  menu: {
    id: 'insuree.and.policies',
    title: 'Insuree & Policies',
    icon: { name: 'fluent:person-16-filled' },
    items: [
      {
        title: 'Add Insuree',
        icon: { name: 'mage:user-plus-fill' },
        url: '/insuree/new',
        separator: true,
      },
      {
        title: 'All Insurees',
        icon: { name: 'f7:person-2-fill' },
        url: '/insuree/home',
      },
      {
        title: 'Families',
        icon: { name: 'f7:person-3-fill' },
        url: '/insuree/families',
      },
    ],
  },
};

const InsureeModule = () => {
  return { ...DEFAULT_CFG };
};

export default InsureeModule;
