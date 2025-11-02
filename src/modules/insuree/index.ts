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
        title: 'Insurees',
        icon: { name: 'mage:user-plus-fill' },
        url: '/insuree/',
        separator: true,
      },
      {
        title: 'Family/Group',
        icon: { name: 'fa:group' },
        url: '/insuree/',
        separator: true,
      },
    ],
  },
};

const InsureeModule = () => {
  return { ...DEFAULT_CFG };
};

export default InsureeModule;
