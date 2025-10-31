import ClaimModule from './claim';
import CoreModule from './core';
import HomeModule from './home';

export interface ModuleDefinitionMenuItem {
  title: string;
  url: string;
  icon?: string;
}

export interface ModuleDefinitionMenu {
  title: string;
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

const MODULES: ModuleCfgDefinition[] = [CoreModule(), HomeModule(), ClaimModule(),];

export default MODULES;
