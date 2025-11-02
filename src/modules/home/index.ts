import type { ModuleCfgDefinition } from '..';
import { HomeRoutes } from './routes';

const DEFAULT_CFG: ModuleCfgDefinition = {
  name: 'Vigtra Home Module',
  description: 'Home module',
  version: '1.0.0',
  routes: HomeRoutes,
  menu: {
    title: 'Home Menu',
    items: [
      {
        title: 'Dashboard',
        url: '/',
        icon: {
          name: 'material-symbols:dashboard',
        },
      },
    ],
  },
};

const HomeModule = () => {
  return { ...DEFAULT_CFG };
};

export default HomeModule;
