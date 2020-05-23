const $ = (str, all) => all
    ? [...document.querySelectorAll(str)]
    : document.querySelector(str)
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


const createCard = () => {
    const element = createEl()
    const styles = {
        height: '100px',
        width: '100px',
        margin: '2em',
        display: 'inline-block',
        background: 'red'
    }
    styler(element, styles)

    return element
}
const createModalContainer = () => {
    const element = createEl()
    return element
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

const getMatrix = element => {
    const style = getComputedStyle(element)
    const matrix = new WebKitCSSMatrix(style.webkitTransform)
    return {
        scale: matrix.m22,
        transformX: matrix.m41,
        transformY: matrix.m42,
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
const modalToCenter = element => {
    const { transformX, transformY } = getMatrix(element)
    const distanceTransform = getDistanceToCenter(element)
    const frameFinfal_1 = `translateX(${distanceTransform.x}px) translateY(${distanceTransform.y}px) scale(3)`
    const keyframes_1 = [
        { transform: `translateX(${transformX}px) translateY(${transformY}px)` },
        { transform: frameFinfal_1 },
    ]
    const options = {
        duration: 600,
        iterations: 1,
        fill: 'forwards'
    }
    const animation = element.animate(keyframes_1, options)
    animation.onfinish = () => {
        const distanceMiddleTop = getDistance(element, { x: window.innerWidth/2, y: window.innerHeight/2.25 })
        const keyframes_2 = [
            { transform: frameFinfal_1 },
            { transform: `translateX(${distanceMiddleTop.x}px) translateY(${distanceMiddleTop.y}px) scale(3)` }
        ]
        element.animate(keyframes_2, {...options, duration: 250})
    }
}

const card = createCard()
card.addEventListener('click', e => {
    const element = e.target
    const clone = cloneNodePosition(element)
    $('#root').appendChild(clone)

    modalToCenter(clone)
})

$('#root').appendChild(card)

