// loadModules.ts
import configData from './config.json' with { type: 'json' };

const modulesFile = 'src/modules.ts';

function getModules() {
  return configData.modules;
}

function loadModules() {
  const MODULES = getModules();
  const importList: string[] = [];
  const initList: string[] = [];

  for (let i = 0; i < MODULES.length; i++) {
    const mod = MODULES[i];
    const packageName = mod.package; // e.g., "@vigtra/fe-core"
    const modFn = mod.module; // e.g., "initModule"

    // Create unique import variable name
    const varName = packageName
      .replace('@', '')
      .replace('/', '_')
      .replace(/-/g, '_');

    // Build an ESM import statement
    importList.push(`import * as ${varName} from "${packageName}";`);
    initList.push(`  ${varName}.${modFn}(cfg["${packageName}"] || {});`);
  }

  // Generate modules.ts content
  const modulesData = `
// ⚙️ Auto-generated file
// Do not edit manually

${importList.join('\n')}

export function loadModules(cfg: Record<string, unknown> = {}) {
${initList.join('\n')}
}
`;

  // Write file
  Deno.writeTextFileSync(modulesFile, modulesData);
  console.log(`✅ Modules file created at: ${modulesFile}`);
}

loadModules();
