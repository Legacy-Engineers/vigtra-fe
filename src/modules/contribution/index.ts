import type { ModuleCfgDefinition } from '..';

const DEFAULT_CFG: ModuleCfgDefinition = {
  name: 'Vigtra Contribution Module',
  description: 'The contribution module to use',
  version: '1.0.0',
  routes: {},
};

const ContributionModule = () => {
  return { ...DEFAULT_CFG };
};

export default ContributionModule;
