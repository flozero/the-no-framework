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

export const button = (options = {}) => {
    const button = document.createElement('button');
    const children = options.children || []
    const _options = Object.keys(options).reduce((acc, key) => {
        if (key !== 'children') {
            acc[key] = options[key]
        }
        return acc
    }, {})

    if (_options) {
        Object.assign(button, _options);
    }

    if (children.length > 0) {
        children.forEach((child, index) => {
            button.appendChild(child);
        });
    }

    return button;
};


export const createComponent = (cb, component) => {
    if (typeof cb === 'function') {
        cb(component)
        return component
    } else {
        return cb
    }
}