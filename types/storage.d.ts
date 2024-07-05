interface StorageJSON {
  name: string
  type: "directory" | "file"
  mtime: string
  size?: number
}

type StorageItem = Omit<StorageJSON, "mtime"> & {
  mtime: Date
  url: string
};

interface Crumb {
  name: string
  url: string
  active: boolean
}

interface StorageState {
  path: string
  items: StorageItem[]
  breadcrumbs: Crumb[]
}
