import ClaimModule from './claim';
import ContributionModule from './contribution';
import CoreModule from './core';
import FormalSectorModule from './formalSector';
import HomeModule from './home';
import InsureeModule from './insuree';
import LocationModule from './location';
import PolicyModule from './policy';

export interface MenuIcon {
  name: string;
  size?: string;
  class?: string; //
}

export interface ModuleDefinitionMenuItem {
  title: string;
  url: string;
  icon?: MenuIcon;
  separator?: boolean;
}

export interface ModuleDefinitionMenu {
  id?: string;
  title: string;
  hookedMenu?: string;
  module?: string;
  icon?: MenuIcon;
  useCollabsible?: boolean;
  items?: ModuleDefinitionMenuItem[];
}

export interface ModuleCfgDefinition {
  routes: object;
  menu?: ModuleDefinitionMenu;
  name: string;
  description: string;
  version: string;
}

const MODULES: ModuleCfgDefinition[] = [
  HomeModule(),
  InsureeModule(),
  FormalSectorModule(),
  ClaimModule(),
  LocationModule(),
  PolicyModule(),
  ContributionModule(),
  CoreModule(),
];

export function getModuleMenus(): ModuleDefinitionMenu[] {
  const menus: ModuleDefinitionMenu[] = MODULES.map((mod) => mod.menu).filter(
    (menu): menu is ModuleDefinitionMenu => !!menu,
  );

  for (const menu of menus) {
    if (menu.hookedMenu) {
      const targetMenu = menus.find((m) => m.id === menu.hookedMenu);
      if (targetMenu) {
        targetMenu.items ??= [];
        menu.items ??= [];

        targetMenu.items.push(...menu.items);
      }
    }
  }

  return menus.filter((menu) => !menu.hookedMenu);
}

export default MODULES;
