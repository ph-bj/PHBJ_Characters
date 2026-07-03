import { execSync } from 'child_process';
import { cpSync, existsSync, rmSync } from 'fs';
import { join } from 'path';

const TARGET = 'E:/projects/ph-bj.github.io'; // Update this path to your target directory

console.log('Building...');
execSync('npm run build', { stdio: 'inherit', shell: true });

const assetsTarget = join(TARGET, 'assets');
if (existsSync(assetsTarget)) {
  rmSync(assetsTarget, { recursive: true, force: true });
}
const downloadsTarget = join(TARGET, 'downloads');
if (existsSync(downloadsTarget)) {
  rmSync(downloadsTarget, { recursive: true, force: true });
}

cpSync('dist/index.html', join(TARGET, 'index.html'));
cpSync('dist/favicon.svg', join(TARGET, 'favicon.svg'));
cpSync('dist/assets', assetsTarget, { recursive: true });
cpSync('dist/downloads', downloadsTarget, { recursive: true });

console.log('Committing and pushing...');
execSync(`git -C "${TARGET}" add index.html favicon.svg assets/ downloads/`, { stdio: 'inherit', shell: true });

const hasChanges = execSync(`git -C "${TARGET}" diff --cached --name-only`, {
  encoding: 'utf8',
  shell: true,
}).trim();

if (hasChanges) {
  execSync(`git -C "${TARGET}" commit -m "Deploy latest build"`, { stdio: 'inherit', shell: true });
  execSync(`git -C "${TARGET}" push`, { stdio: 'inherit', shell: true });
  console.log('Deploy complete.');
} else {
  console.log('No changes to deploy.');
}
