#!/usr/bin/env node
/**
 * Workspace Contract Linter:
 * Mechanically verifies that every app and package in the workspace implements
 * the Universal Lifecycle Script Contract.
 */

import fs from 'node:fs';
import path from 'node:path';

const REQUIRED_SCRIPTS = ['build', 'lint', 'type-check', 'test'];
const SCAN_DIRS = ['apps', 'packages'];

let failed = false;

for (const dir of SCAN_DIRS) {
  const fullDir = path.resolve(process.cwd(), dir);
  if (!fs.existsSync(fullDir)) continue;

  const entries = fs.readdirSync(fullDir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const pkgJsonPath = path.join(fullDir, entry.name, 'package.json');
    if (!fs.existsSync(pkgJsonPath)) continue;

    const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
    const scripts = pkg.scripts || {};

    const missing = REQUIRED_SCRIPTS.filter((s) => !scripts[s]);
    if (missing.length > 0) {
      console.error(`❌ [${dir}/${entry.name}] Missing required lifecycle scripts: ${missing.join(', ')}`);
      failed = true;
    } else {
      console.info(`✅ [${dir}/${entry.name}] Satisfies Universal Script Contract.`);
    }
  }
}

if (failed) {
  process.exit(1);
} else {
  console.info('🎉 All workspace projects satisfy the Universal Lifecycle Contract!');
}
