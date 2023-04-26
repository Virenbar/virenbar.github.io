/* eslint-disable @typescript-eslint/no-unused-vars */
interface StorageJSON {
  name: string
  type: "directory" | "file"
  mtime: string
  size?: number
}

type StorageItem = Omit<StorageJSON, "mtime"> & {
  mtime: Date
  url: string
}
