import type { ModuleCfgDefinition } from '..';

const DEFAULT_CFG: ModuleCfgDefinition = {
  name: 'Vigtra Payment Module',
  description: 'Payment',
  version: '1.0.0',
  routes: {},
};

const PaymentModule = () => {
  return { ...DEFAULT_CFG };
};

export default PaymentModule;
