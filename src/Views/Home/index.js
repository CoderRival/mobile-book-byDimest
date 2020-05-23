import template from './template'
import Card from './Card'
import dataBooks from './dataBooks'
import './style.css'

const element = document.createElement('div')
const content = document.importNode(template.content, true)
element.appendChild(content)
const root = element.querySelector('[data-root]')

const insertCard = data => root.appendChild(Card(data))

dataBooks.forEach(insertCard)

export default { element }