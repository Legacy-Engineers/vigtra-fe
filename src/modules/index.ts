import ClaimModule from './claim';
import CoreModule from './core';
import FormalSectorModule from './formalSector';
import HomeModule from './home';
import InsureeModule from './insuree';

export interface ModuleDefinitionMenuItem {
  title: string;
  url: string;
  icon?: string;
}

export interface ModuleDefinitionMenu {
  title: string;
  hookedMenu?: string;
  module?: string;
  icon?: string;
  items?: ModuleDefinitionMenuItem[];
}

export interface ModuleCfgDefinition {
  routes: object;
  menu?: ModuleDefinitionMenu;
  name: string;
  description: string;
  version: number;
}

const MODULES: ModuleCfgDefinition[] = [
  CoreModule(),
  HomeModule(),
  ClaimModule(),
  InsureeModule(),
  FormalSectorModule(),
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
      const targetMenu = menus.find((m) => m.title === menu.hookedMenu);
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
