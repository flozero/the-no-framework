let instance = null;
let subscribers = new Set();

export const defineState = (state = {}) => {
    // const tmp = {
    //     cb,
    //     listenTo
    // }
    // subscribers.add(tmp)
    // if (!instance) {
    //     instance = new Proxy(state, {
    //         get: (target, prop) => {
    //             return target[prop]
    //         },
    //         set: (target, prop, value) => {
    //             target[prop] = value
    //             console.log("je suis la")
    //             subscribers.forEach((sub) => {
    //                 if (sub.listenTo.includes(prop)) {
    //                     sub.cb(instance, target)
    //                 }
    //             })
    //             return true
    //         }
    //     })
    // }
    // return [instance, () => subscribers.delete(tmp)]

    return new Proxy(state, {
        get: (target, prop) => {
            return target[prop]
        },
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

export const subscribe = (cb, listenTo) => {
    const tmp = {
        cb,
        listenTo
    }
    subscribers.add(tmp)
    return () => subscribers.delete(tmp)
}

// export const useState = defineState({
//     count: 0,
//     countTwo: 0,
//     loading: "loading..."
// })
