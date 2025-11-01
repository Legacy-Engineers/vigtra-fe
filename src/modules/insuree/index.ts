import type { ModuleCfgDefinition } from '..';
import { InsureeRoutes } from './routes';

const DEFAULT_CFG: ModuleCfgDefinition = {
  name: 'Vigtra Insuree Module',
  description: 'insuree and more',
  version: 1,
  routes: InsureeRoutes,
  menu: {
    title: 'Insuree',
    icon: 'fluent:person-16-filled',
    items: [
      {
        title: 'All Insurees',
        icon: 'f7:person-2-fill',
        url: '/insuree/home',
      },
      {
        title: 'Families',
        icon: 'f7:person-3-fill',
        url: '/insuree/families',
      },
    ],
  },
};

const InsureeModule = () => {
  return { ...DEFAULT_CFG };
};

export default InsureeModule;
