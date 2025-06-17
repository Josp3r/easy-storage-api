# Storage API

本包旨在**规范化存储（localStorage/sessionStorage）API 的 Promise 风格接口**，为不同环境下的存储实现提供统一的类型定义和调用方式。

> 包内仅提供了最基础的 client 端（浏览器）实现作为参考，实际项目可根据统一的 API 规范扩展适配其他环境（如服务端、混合端等）。

## 安装

```bash
pnpm add easy-storage-api
# 或
yarn add easy-storage-api
# 或
npm install easy-storage-api
```

## 类型定义

```ts
type ClientStorageType = 'localStorage' | 'sessionStorage';

interface StorageAPI {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
  removeItem(key: string): Promise<void>;
  clear(): Promise<void>;
}
```

## 用法示例

### 1. 使用 ClientStorage 类（浏览器环境示例）

```ts
import { ClientStorage } from 'easy-storage-api';

// 选择 localStorage 或 sessionStorage
const storage = new ClientStorage('localStorage');

// 存储数据
await storage.setItem('foo', 'bar');

// 获取数据
const value = await storage.getItem('foo');
console.log(value); // 'bar'

// 删除数据
await storage.removeItem('foo');

// 清空存储
await storage.clear();
```

### 2. 类型提示

本库自带完整 TypeScript 类型定义，无需额外配置。

## 扩展实现

你可以基于统一的 `StorageAPI` 类型，在不同运行环境下实现自定义的存储适配器，实现跨端一致的调用体验。

## 构建与产物

- ESM 产物：`dist/esm/index.js`
- CJS 产物：`dist/cjs/index.js`
- 类型声明：`types/index.d.ts`

可通过 `import` 或 `require` 自动选择合适产物。

## 开发/构建命令

```bash
pnpm run build      # 同时构建 CJS 和 ESM
pnpm run build:cjs  # 仅构建 CJS
pnpm run build:esm  # 仅构建 ESM
```

## License

MIT