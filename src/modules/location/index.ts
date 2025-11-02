import type { ModuleCfgDefinition } from '..';

const DEFAULT_CFG: ModuleCfgDefinition = {
  name: 'Vigtra Location Module',
  description: 'The location module',
  version: '1.0.0',
  routes: {},
  menu: {
    title: 'Location Module',
    items: [
      {
        title: 'Health Facility',
        url: '/location/health-facility/',
        icon: {
          name: 'material-symbols:home-health',
        },
      },
    ],
  },
};

const LocationModule = () => {
  return { ...DEFAULT_CFG };
};

export default LocationModule;
