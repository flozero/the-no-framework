let instance = null;
let subscribers = new Set();

const defineState = (state = {}) => (cb, listenTo = []) => {
    subscribers.add({
        cb,
        listenTo
    })
    if (!instance) {
        instance = new Proxy(state, {
            set: (target, prop, value) => {
                target[prop] = value
                subscribers.forEach((sub) => {
                    if (sub.listenTo.includes(prop)) {
                        sub.cb(instance, target)
                    }
                })
                return true
            }
        })
    }
    return instance
}

export const useState = defineState({
    count: 0,
    countTwo: 0
})