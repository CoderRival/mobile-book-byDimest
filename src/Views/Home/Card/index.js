import './style.css'
const Card = ({data}) => {
    const element = document.createElement('article')
    element.classList.add('card')
    element.__data = data
    
    const { title, author, percentage, image, category } = data

    element.innerHTML = /* html */ `
        <header>
            <img loading="lazy" width="120" height="150"
                class="card__imagen" src="${image}" 
                alt="Book ${title} by ${author}"/>
        </header>
        <main>
            <span class="card__category">${category}</span>
            <h1 class="card__title">${title}</h1>
            <span class="card__author">${author}</span>
            <div class="card__percentage">
                <progress value="${percentage}" max="100">
                    ${percentage}%
                </progress>
                <span>
                    ${percentage}%
                </span>
            </div>    
        </main>
    `

    return { element }
}

export default Card