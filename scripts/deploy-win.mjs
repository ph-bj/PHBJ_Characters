import { execSync } from 'child_process';
import { cpSync, existsSync, rmSync } from 'fs';
import { join } from 'path';

const TARGET = 'E:/projects/ph-bj.github.io'; // Update this path to your target directory

console.log('Pulling latest changes from remote...');
execSync(`git -C "${TARGET}" pull`, { stdio: 'inherit', shell: true });

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
cpSync('dist/apple-touch-icon.png', join(TARGET, 'apple-touch-icon.png'));
cpSync('dist/favicon-16x16.png', join(TARGET, 'favicon-16x16.png'));
cpSync('dist/favicon-32x32.png', join(TARGET, 'favicon-32x32.png'));
cpSync('dist/android-chrome-192x192.png', join(TARGET, 'android-chrome-192x192.png'));
cpSync('dist/android-chrome-512x512.png', join(TARGET, 'android-chrome-512x512.png'));
cpSync('dist/site.webmanifest', join(TARGET, 'site.webmanifest'));
cpSync('dist/assets', assetsTarget, { recursive: true });
cpSync('dist/downloads', downloadsTarget, { recursive: true });

console.log('Committing and pushing...');
execSync(`git -C "${TARGET}" add index.html favicon.svg apple-touch-icon.png favicon-16x16.png favicon-32x32.png android-chrome-192x192.png android-chrome-512x512.png site.webmanifest assets/ downloads/`, { stdio: 'inherit', shell: true });

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
