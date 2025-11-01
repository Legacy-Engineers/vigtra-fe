import type { ModuleCfgDefinition } from '..';

const DEFAULT_CFG: ModuleCfgDefinition = {
  name: 'Vigtra Core Module',
  description: 'The core module of vigtra',
  version: '1.0.0',
  routes: {},
  menu: {
    title: 'Administration',
    icon: {
      name: 'mage:dashboard-3-fill',
    },
    items: [
      {
        title: 'Users',
        url: '/admin/users',
        icon: { name: 'lsicon:user-crowd-filled' },
      },
    ],
  },
};

const CoreModule = () => {
  return { ...DEFAULT_CFG };
};

export default CoreModule;
