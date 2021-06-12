class LocalStorageMock {
    constructor() {
        this.data = {}
    }
    clear() {
        this.data = {}
    }
    getItem(key) {
        return this.data[key] || null
    }
    addItem(key, data) {
        this.data[key] = data
    }
    removeItem(key) {
        delete this.data[key]
    }
}

global.localStorage = new LocalStorageMock()