import _ from 'lodash'
import RootStore from 'stores'
class StorageManager {

  static default: StorageManager = new StorageManager()

  setItem(key: string, value: string) {
    if (RootStore.isServer) return
    localStorage.setItem(key, value)
  }

  removeItem(key: string) {
    if (RootStore.isServer) return
    localStorage.removeItem(key)
  }

  getItem(key: string) {
    if (RootStore.isServer) return ''
    return localStorage.getItem(key)
  }
}

export default StorageManager