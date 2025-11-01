import type { ModuleCfgDefinition } from '..';

const DEFAULT_CFG: ModuleCfgDefinition = {
  name: 'Vigtra Policy Module',
  version: '1.0.0',
  description: 'The Policy module',
  routes: {},
  menu: {
    title: 'Policy',
    hookedMenu: 'insuree.and.policies',
    items: [
      {
        title: 'Policies',
        icon: { name: 'material-symbols-light:policy' },
        url: '/policies/',
      },
    ],
  },
};

const PolicyModule = () => {
  return { ...DEFAULT_CFG };
};

export default PolicyModule;
