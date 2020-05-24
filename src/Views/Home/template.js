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
            background-image: 
                linear-gradient(to bottom right, #13C0C7, #089999); 
            border-radius: 1em; 
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 1.2em;
            ">
            <span style="margin: .5em 1em; font-weight: 100;">Study time today</span>
            <span data-time  style="margin: .5em 1em; font-weight: 500;"></span>
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
    <main data-root>

    </main>
</div>
`

export default template