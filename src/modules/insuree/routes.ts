import InsureeDetail from './components/insureeDetail.svelte';
import InsureeEdit from './components/insureeEdit.svelte';
import InsureeFamilyList from './pages/InsureeFamilyList.svelte';
import InsureeHome from './pages/InsureeHome.svelte';

export const InsureeRoutes = {
  '/insuree/': InsureeHome,
  '/insuree/:uuid/detail': InsureeDetail,
  '/insuree/:uuid/edit': InsureeEdit,
  '/insuree/families/': InsureeFamilyList,
};
