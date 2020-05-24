import utils from 'utils'
import Front from './Front'
import Text from './Text'

const {
    styler,
    cloneNodePosition,
    modalToCenter
} = utils

const element = document.createElement('div')
const styles = {
    height: '100%',
    width: '100vw',
    position: 'absolute',
    top: 0,
    left: 0,
    'z-index': -1
}
styler(element, styles)

window.addEventListener('showBook', e => {
    console.log(e.detail)
    const { element, data } = e.detail
    const imagen = element.querySelector('.card__imagen')
    const book = Book({data}).element
    enterFront({root: book, element: imagen})
})

const Book = ({data}={data:{}}) => {
    element.innerHTML = ''
    const elementFront = Front({data})    
    const elementText = Text({data})    
    element.appendChild(elementFront)
    element.appendChild(elementText)

    return { element }
}
    
const enterFront = ({root, element}) => {
    const clone = cloneNodePosition(element)
    root.appendChild(clone)
    modalToCenter(clone)
//     modalToCenter(clone)
}
const leave = () => {
    
}

export default Book