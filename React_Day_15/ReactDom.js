// ========================= React renderer logic ====================
export function render(reactElement, rootElement) {
    function createDomElement(reactElement) {
        // handled if the type of react element is function
        if (typeof reactElement.type === 'function') {
            return createDomElement(reactElement.type(reactElement.props)) // allowed the function to accept & use props
        }

        // handled if the type of react element is string 
        if (typeof reactElement === 'string' || typeof reactElement === 'number') {
            return document.createTextNode(reactElement)
        }

        // handled if the there is array of multiple elements  
        if (Array.isArray(reactElement)) {
            return reactElement.map(item => createDomElement(item))
        }

        const { type, props } = reactElement;
        const DOMElement = document.createElement(type)

        if (props) {
            Object.entries(props).forEach(([Key, value]) =>
                DOMElement[Key] = value
            )

            props.children?.forEach((child) => {
                if (Array.isArray(child)) {
                    child.forEach(el => DOMElement.append(createDomElement(el)))
                }
                else if (typeof child === 'string') {
                    const textNode = document.createTextNode(child)
                    DOMElement.append(textNode)
                } else {
                    DOMElement.append(createDomElement(child))
                }
            })
        }

        return DOMElement
    }

    const DOMElement = createDomElement(reactElement);
    if (Array.isArray(DOMElement)) { // handled if the there is array of multiple DOMelements  
        rootElement.append(...DOMElement)
    } else {
        rootElement.append(DOMElement)
    }
}