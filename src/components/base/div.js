export const div = (options) => {
    const div = document.createElement('div');
    const children = options.children || []
    const render = options.render || null
    const _options = Object.keys(options).reduce((acc, key) => {
        if (key !== 'children' && key !== 'render') {
            acc[key] = options[key]
        }
        return acc
    }, {})
  
    if (_options) {
        Object.assign(div, _options);
    }
  
    if (children.length > 0) {
        children.forEach((child, index) => {
            div.appendChild(child);
        });
    }

    if (render) render(div, options)

    return div
}
