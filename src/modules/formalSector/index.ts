import type { ModuleCfgDefinition } from '..';
import FormalSectorRoutes from './routes';

const DEFAULT_CFG: ModuleCfgDefinition = {
  name: 'Vigtra Formal Sector Module',
  description: 'Formal Private sectors',
  routes: FormalSectorRoutes,
  version: 1,
  menu: {
    title: 'Formal Sector',
    hookedMenu: 'Insuree',
    items: [
      {
        title: 'Formal Sector',
        icon: 'octicon:organization-16',
        url: '/formal-sector/home',
      },
    ],
  },
};

const FormalSectorModule = () => {
  return { ...DEFAULT_CFG };
};

export default FormalSectorModule;
