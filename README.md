# Storage API

[中文文档](./README.zh.md)

A package that **standardizes storage (localStorage/sessionStorage) API with Promise-style interfaces**, providing unified type definitions and calling conventions for storage implementations across different environments.

> The package only includes basic client-side (browser) implementation as a reference. Projects can extend and adapt to other environments (such as server-side, hybrid platforms, etc.) following the unified API specification.

## Installation

```bash
pnpm add easy-storage-api
# or
yarn add easy-storage-api
# or
npm install easy-storage-api
```

## Type Definitions

```ts
type ClientStorageType = 'localStorage' | 'sessionStorage';

interface StorageAPI {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
  clear(): Promise<void>;
}
```

## Usage Examples

### 1. Using ClientStorage Class (Browser Environment)

```ts
import { ClientStorage } from 'easy-storage-api';

// Choose localStorage or sessionStorage
const storage = new ClientStorage('localStorage');

// Store data
await storage.setItem('foo', 'bar');

// Retrieve data
const value = await storage.getItem('foo');
console.log(value); // 'bar'

// Remove data
await storage.removeItem('foo');

// Clear storage
await storage.clear();
```

### 2. Type Hints

This library comes with complete TypeScript type definitions, no additional configuration needed.

## Custom Implementation

You can implement custom storage adapters for different runtime environments based on the unified `StorageAPI` type, achieving consistent cross-platform usage experience.

## Build Output

- ESM output: `dist/esm/index.js`
- CJS output: `dist/cjs/index.js`
- Type declarations: `types/index.d.ts`

The appropriate format will be automatically selected when using `import` or `require`.

## Development Commands

```bash
pnpm run build      # Build both CJS and ESM
pnpm run build:cjs  # Build CJS only
pnpm run build:esm  # Build ESM only
```

## License

MIT

