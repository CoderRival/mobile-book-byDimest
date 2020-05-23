import './style.css'

const root = document.createElement('div')

root.id = 'root'
root.innerHTML = /* html */ `
    <nav id="root_nav">
        <div class="back">
            <img src="/assets/back.svg" style="width: 2em;" alt=""/>
        </div>
        <div class="others">
            <img src="/assets/search.svg" style="width: 2em;" alt=""/>
            <span style="font-size: 2em; font-weight: 500; padding-left: .5em">$</span>
        </div>
    </nav>
    <main id="root_main">

    </main>
`

document.body.appendChild(root)
const append = node => root.querySelector('#root_main').appendChild(node)

export default { append }
