import type { StorageAPI, ClientStorageType } from './types'

const getClientStorage = (type: ClientStorageType) => {
  return type === 'sessionStorage' ? sessionStorage : localStorage
}

/**
 * 浏览器存储 API 实现
 * 优化实例化时不直接访问 localStorage/sessionStorage，而是在调用时才访问，避免在服务端环境报错
 */
export class ClientStorage implements StorageAPI {
  constructor(private type: ClientStorageType) {}

  getItem(key: string): Promise<string | null> {
    return new Promise((resolve, reject) => {
      try {
        resolve(getClientStorage(this.type).getItem(key))
      } catch (error) {
        reject(error)
      }
    })
  }

  setItem(key: string, value: string): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        getClientStorage(this.type).setItem(key, value)
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }

  removeItem(key: string): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        getClientStorage(this.type).removeItem(key)
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }

  clear(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        getClientStorage(this.type).clear()
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  }
}
