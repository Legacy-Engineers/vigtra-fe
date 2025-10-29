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
    const modFn = mod.module; // e.g., "CoreModule"
    const useDefault = mod.useDefault ?? false; // Add this to config for flexibility

    // Create unique import variable name
    const varName = packageName
      .replace('@', '')
      .replace('/', '_')
      .replace(/-/g, '_');

    // Build import statement - support both named and default imports
    if (useDefault) {
      // Use default import
      importList.push(`import ${varName} from "${packageName}";`);
      initList.push(`  ${varName}(cfg["${packageName}"] || {}),`);
    } else {
      // Use named import (more specific)
      importList.push(`import { ${modFn} } from "${packageName}";`);
      initList.push(`  ${modFn}(cfg["${packageName}"] || {}),`);
    }
  }

  // Generate modules.ts content
  const modulesData = `// ⚙️ Auto-generated file
// Do not edit manually
${importList.join('\n')}

export function loadModules(cfg: Record<string, unknown> = {}) {
  return [
${initList.join('\n')}
  ];
}
`;

  // Write file
  Deno.writeTextFileSync(modulesFile, modulesData);
  console.log(`✅ Modules file created at: ${modulesFile}`);
}

loadModules();