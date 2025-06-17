export declare type StorageGetItem = (key: string) => Promise<string | null>;
export declare type StorageSetItem = (key: string, value: string) => Promise<void>;
export declare type StorageRemoveItem = (key: string) => Promise<void>;
export declare type StorageClear = () => Promise<void> | void;
export interface StorageAPI {
    getItem: StorageGetItem;
    setItem: StorageSetItem;
    removeItem: StorageRemoveItem;
    clear: StorageClear;
}
export declare type ClientStorageType = 'localStorage' | 'sessionStorage';
export declare class ClientStorage implements StorageAPI {
    private storage;
    constructor(type: ClientStorageType);
    getItem(key: string): Promise<string | null>;
    setItem(key: string, value: string): Promise<void>;
    removeItem(key: string): Promise<void>;
    clear(): Promise<void>;
}
