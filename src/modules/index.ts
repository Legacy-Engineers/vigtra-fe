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
  // Step 1: collect all menus that exist
  const menus: ModuleDefinitionMenu[] = MODULES.map((mod) => mod.menu).filter(
    (menu): menu is ModuleDefinitionMenu => !!menu,
  );

  // Step 2: handle hooked menus
  for (const menu of menus) {
    if (menu.hookedMenu) {
      // Find the menu it wants to hook into
      const targetMenu = menus.find((m) => m.id === menu.hookedMenu);
      if (targetMenu) {
        // Initialize items arrays if needed
        targetMenu.items ??= [];
        menu.items ??= [];

        // Append hooked menu’s items to the target menu
        targetMenu.items.push(...menu.items);
      }
    }
  }

  // Step 3: return only menus that are *not* hooked (top-level)
  return menus.filter((menu) => !menu.hookedMenu);
}

export default MODULES;
