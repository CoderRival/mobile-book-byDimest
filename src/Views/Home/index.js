import template from './template'
import Card from './Card'
import './style.css'

const element = document.createElement('div')
const content = document.importNode(template.content, true)
element.appendChild(content)
const root = element.querySelector('[data-root]')
const timer = element.querySelector('[data-time]')

let seconds = 59
setInterval(() => {
    timer.innerHTML = `02:56:${seconds > 9 ? seconds : '0' + seconds} minutes`
    seconds--
    if (seconds === -1) {
        seconds = 59
    }
}, 1000)

const Home = ({ data }) => {
    root.innerHTML = ''
    const insertCard = data => {
        const card = Card({ data })
        const detail = { data, element: card.element }
        const event = new CustomEvent('showBook', { detail })
        card.element.addEventListener('click', e => {
            window.dispatchEvent(event)
        })
        root.appendChild(card.element)
    }
    data.forEach(insertCard)
    return { element }
}

export default Home