// loadModules.ts
import configData from './config.json' with { type: 'json' };

const modulesFile = 'src/modules.ts';

function getModules() {
  return configData.modules;
}

function loadModules() {
  const MODULES = getModules();
  const requiredList: string[] = [];

  for (let i = 0; i < MODULES.length; i++) {
    const mod = MODULES[i];
    const packageName = mod.package; // npm package

    // Get the last part of the package name for cfg key
    const cfgName = packageName.split('/').pop(); // e.g., "@vigtra/fe-core" -> "fe-core"

    // Build require statement using cfgName
    const required = `  require("${packageName}").${mod.module}(cfg["${cfgName}"] || {})`;
    requiredList.push(required);
  }

  // Build modules.ts content
  const modulesData = `
// ⚙️ Auto-generated file
// Do not edit manually

export const MODULES = [
${requiredList.join(',\n')}
];
`;

  // Write to file
  Deno.writeTextFileSync(modulesFile, modulesData);
  console.log(`✅ Modules file created at: ${modulesFile}`);
}

loadModules();
