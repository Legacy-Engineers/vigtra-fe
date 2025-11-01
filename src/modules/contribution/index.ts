import type { ModuleCfgDefinition } from '..';

const DEFAULT_CFG: ModuleCfgDefinition = {
  name: 'Vigtra Contribution Module',
  description: 'The contribution module to use',
  version: '1.0.0',
  routes: {},
  menu: {
    title: 'Contributions',
    hookedMenu: 'insuree.and.policies',
    items: [
      {
        title: 'Contributions',
        icon: {
          name: 'fluent:person-money-24-filled',
        },
        url: '/contributions',
      },
    ],
  },
};

const ContributionModule = () => {
  return { ...DEFAULT_CFG };
};

export default ContributionModule;
