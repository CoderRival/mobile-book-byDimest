const Text = ({data}) => {
    const { title, author, stars, content } = data
    const element = document.createElement('article')
    
    element.innerHTML = /* html */ `
        <header>
            <h1>${title}</h1>
            <span>${author}</span>
            <span>Stars: ${stars}</span>
        </header>
        <main>
            <p>${content}</p>
        </main>
    `
    
    return element
}

export default Text