const template = document.createElement('template')
template.innerHTML = /* html */`
<div id="home" style="">
    <header>
        <h1> 
            <span style="font-weight: 100"> Your </span>
            <br/> 
            <strong> Bookself. </strong>
        </h1>
    </header>
    <section>
        <!-- <img src="" alt=""/> -->
        <div style="
            height: 160px; 
            background-image: linear-gradient(to bottom right, #1EA8D4, #1888A0); 
            border-radius: 1em;">
        </div>
    </section>
    <nav>
        <ul>
            <li>
                <a href="#" class="select"> All </a>
            </li>
            <li>
                <a href="#"> Fiction </a>
            </li>
            <li>
                <a href="#"> Political </a>
            </li>
            <li>
                <a href="#"> Action </a>
            </li>
        </ul>
    </nav>
    <main data-root="true">

    </main>
</div>
`

export default template