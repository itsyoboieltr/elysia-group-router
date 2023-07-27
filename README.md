# elysia-group-router

Group router for [Elysia](https://elysiajs.com/), to help you separate and manage your groups.

## Install

```bash
bun add elysia-group-router
```

## Usage

### 1. Register the plugin

```ts
import { Elysia } from 'elysia';
import groupRouter from 'elysia-group-router';

new Elysia().use((app) => groupRouter(app, 'groups')).listen(3000);
```

### 2. Create your first group in the `groups` directory

```ts
// file: groups/hello/index.ts
// url: http://localhost:3000/hello

import Elysia from 'elysia';

export default function helloGroup(app: Elysia, prefix: string) {
  return app.group(prefix, (app) => app.get('', () => 'hello'));
}
```

## License

MIT
