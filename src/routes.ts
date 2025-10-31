import NotFoundPage from '$lib/components/notFoundPage.svelte';
import MODULES from './modules';

const routes = {
  ...MODULES.reduce((acc, mod) => ({ ...acc, ...mod.routes }), {}),
  '*': NotFoundPage,
};

export default routes;
