export const button = (options, cb) => {
    const button = document.createElement('button');
    const children = options.children || []
    const render = options.render || null
    const _options = Object.keys(options).reduce((acc, key) => {
        if (key !== 'children' && key !== 'render') {
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

    if (render) render(button, options)

    return button
}
