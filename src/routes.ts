import NotFoundPage from '$lib/components/notFoundPage.svelte';
import MODULES from './modules';
import ForgetPasswordPage from './pages/forgetPasswordPage.svelte';
import LoginPage from './pages/loginPage.svelte';
import RegisterPage from './pages/registerPage.svelte';

const routes = {
  '/login': LoginPage,
  '/forget-password': ForgetPasswordPage,
  '/register': RegisterPage,
  ...MODULES.reduce((acc, mod) => ({ ...acc, ...mod.routes }), {}),
  '*': NotFoundPage,
};

export default routes;
