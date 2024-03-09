let instance = null;
let subscribers = []

export const useState = (cb) => {
    subscribers.push(cb)
    if (!instance) {
        instance = new Proxy({
            count: 0
        }, {
            set: (target, prop, value) => {
                target[prop] = value
                subscribers.forEach((cb) => cb(instance))
                return true
            }
        })
    }
    return instance
}