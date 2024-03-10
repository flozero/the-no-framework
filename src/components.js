export const div = (options = {}) => {
    const div = document.createElement('div');
    const children = options.children || []
    const _options = Object.keys(options).reduce((acc, key) => {
        if (key !== 'children') {
            acc[key] = options[key]
        }
        return acc
    }, {})

    if (_options) {
        Object.assign(div, _options);
    }
    if (children.length > 0) {
        console.log('children', children)
        children.forEach((child, index) => {
            div.appendChild(child);
        });
    }

    return div;
};

export const createComponent = (cb, component, ...args) => {
    if (typeof cb === 'function') {
        cb({
            el: component,
            ...args
        })
        return component
    } else {
        return cb
    }
}
