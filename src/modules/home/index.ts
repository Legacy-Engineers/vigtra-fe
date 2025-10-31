import type { ModuleCfgDefinition } from '..';
import { HomeRoutes } from './routes';

const DEFAULT_CFG: ModuleCfgDefinition = {
  name: 'Vigtra Home Module',
  description: 'Home module',
  version: 1,
  routes: HomeRoutes,
};

const HomeModule = () => {
  return { ...DEFAULT_CFG };
};

export default HomeModule;
