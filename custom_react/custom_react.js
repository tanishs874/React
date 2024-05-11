function customRender(react_Element,container){
    // const dom_Element = document.createElement(react_Element.type)
    // dom_Element.innerHTML = react_Element.children
    // dom_Element.setAttribute('href',react_Element.props.href)
    // dom_Element.setAttribute('target',react_Element.props.target)

    // container.appendChild(dom_Element);

    const dom_Element = document.createElement(react_Element.type)
    dom_Element.innerHTML = react_Element.children
    for (const prop in react_Element.props) {
        if(prop ===  'children') continue;
        dom_Element.setAttribute(prop,react_Element.props[prop])
    }
    container.appendChild(dom_Element)
}


const react_Element = {
    type: 'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children: 'Click me to visit google'
}

const main_Container = document.querySelector('#root')

customRender(react_Element,main_Container)