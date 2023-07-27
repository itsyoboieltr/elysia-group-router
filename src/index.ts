import type { Elysia } from 'elysia';
import { join, dirname } from 'node:path';
import { glob } from 'glob';

export default async function groupRouter(app: Elysia, groupsDir = 'groups') {
  const groupsPath = join(import.meta.dir, groupsDir);
  const files = await glob('**/index.ts', { cwd: groupsPath, absolute: true });
  for (const file of files) {
    const { default: group } = await import(file);
    const folderName = dirname(file).replace(groupsPath, '');
    app.use((app) => group(app, folderName));
  }
  return app;
}
