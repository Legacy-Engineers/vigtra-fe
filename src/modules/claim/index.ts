import type { ModuleCfgDefinition } from '..';
import ClaimHome from './pages/claimHome.svelte';

const DEFAULT_CFG: ModuleCfgDefinition = {
  name: 'Vigtra Claim Module',
  description: 'Module for managing claims within the Vigtra application',
  version: '1.0.0',
  routes: {
    '/claims': ClaimHome,
  },
  menu: {
    title: 'Claims',
    icon: { name: 'fluent-emoji-high-contrast:baggage-claim' },
    items: [
      {
        title: 'All Claims',
        url: '/claims',
        icon: { name: 'mdi:file-document-check' },
      },
      {
        title: 'Encounters',
        url: '/encounter',
        icon: {
          name: 'streamline-ultimate:doctor-home-visit-1-bold',
        },
      },
    ],
  },
};

const ClaimModule = () => {
  return { ...DEFAULT_CFG };
};

export default ClaimModule;
