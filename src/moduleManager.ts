import { loadModules } from './modules.ts';

class ModuleDefinition {
  module;
  routes: string[];

  constructor(mod: object) {
    this.module = mod;
    this.routes = [];
  }

  getRoutes() {
    return this.routes;
  }
}

async function loadModuleDefinitions() {
  const modules = await loadModules();

  for (const mod of modules) {
    console.log(mod);
  }
}

export default { ModuleDefinition, loadModuleDefinitions };
