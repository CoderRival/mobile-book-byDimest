const getMatrix = element => {
    const coords = element.getBoundingClientRect()
    const style = getComputedStyle(element)
    const matrix = new WebKitCSSMatrix(style.webkitTransform)
    return {
        scale: matrix.m22,
        transformX: matrix.m41,
        transformY: matrix.m42,
        width: coords.width,
        height: coords.height
    }
}
const getDistanceToCenter = element => {
    const center = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    }
    const coords = element.getBoundingClientRect()

    return {
        x: center.x - coords.x - coords.width / 2,
        y: center.y - coords.y - coords.height / 2
    }
}
const getDistance = (element, point) => {
    const coords = element.getBoundingClientRect()
    return {
        x: point.x ? (point.x - coords.x) : 0,
        y: point.y ? (point.y - coords.y) : 0
    }
}
const getSizeDifference = (element, sizes) => {
    const coords = element.getBoundingClientRect()
    return {
        width: sizes.width ? (sizes.width - coords.width) : 0,
        height: sizes.height ? (sizes.height - coords.height) : 0,
    }
}
const modalToCenter = element => {
    const { transformX, transformY, width, height } = getMatrix(element)
    const distanceMiddlefTop = getDistance(element, { x: window.innerWidth/2, y: window.innerHeight/6 })
    const size = getSizeDifference(element, { width: 300, height: 300})

    const frame1 = { 
        width: `${width}px`,
        height: `${height}px`,
        left: 0,
        transform: `translateX(${transformX}px) translateY(${transformY}px)`,
    }
    const frame2 = { 
        width: `${size.width}px`, 
        height: `${size.height}px`,
        left: '50%',
        transform: `translateX(-50%) translateY(${transformY+distanceMiddlefTop.y}px)`, 
    }
    const keyframes_1 = [ frame1, frame2 ]
    const options = {
        duration: 600,
        fill: 'forwards'
    }
    element.animate(keyframes_1, options)
}

const $ = (str, all) => {
    return all
        ? [...document.querySelectorAll(str)]
        : document.querySelector(str)
}
const createEl = str => document.createElement(str || 'div')
const styler = (element, obj) => {
    const core = (element, obj) => {
        for (let prop in obj) {
            element.style.setProperty(prop, obj[prop])
        }
        return obj => core(element, obj)
    }   
    return obj ? core(element, obj) : obj => core(element, obj)
}

const cloneNodePosition = element => {
    const clone = element.cloneNode(true)
    const coords = element.getBoundingClientRect()
    const styles = {
        position: 'fixed',
        top: 0,
        left: 0,
        transform: `translateX(${coords.x}px) translateY(${coords.y}px)`,
        background: 'green',
        margin: 0,
    }
    styler(clone, styles)
    return clone
}

// const card = createCard()
// card.addEventListener('click', e => {
//     const element = e.target
//     const clone = cloneNodePosition(element)
//     $('#root').appendChild(clone)

//     modalToCenter(clone)
// })

export default {
    createEl,
    $,
    styler,
    cloneNodePosition,
    modalToCenter
}