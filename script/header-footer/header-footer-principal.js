window.onload = carregamento()
let banner = document.querySelector('div#banner')
function carregamento(){
    let header = document.querySelector('header.principal')
    let footer = document.querySelector('footer.principal')

    //header----------------------------------------
    header.innerHTML = `
                <div id="navegacao">
                <div class="menu-toggle">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
                </div>
                <nav>
                    <ul class="menu">
                        <li>
                            <a href="unidades/taunay/taunay.html">Taunay</a>
                            <ul class="submenu">
                                <li>
                                    3091-8686            
                            </ul>
                        </li>
                        <li>
                            <a href="#">Patio</a>
                            <ul class="submenu">
                                <li>
                                    3030-7676            
                            </ul>
                        </li>
                        <li>
                            <a href="#">Sete</a>
                            <ul class="submenu">
                                <li>
                                    3242-3963            
                            </ul>
                        </li>
                        <li>
                            <a href="#">Cabral</a>
                            <ul class="submenu">
                                <li>
                                    3254-4224            
                            </ul>
                        </li>
                        <li>
                            <a href="#">Juveve</a>
                            <ul class="submenu">
                                <li>
                                    3254-6621            
                            </ul>
                        </li>
                        <li>
                            <a href="#">Patio Men</a>
                            <ul class="submenu">
                                <li>
                                    99774-0026            
                            </ul>
                        </li>
                        <li>
                            <a href="#">Barigui</a>
                            <ul class="submenu">
                                <li>
                                    99771-0437            
                            </ul>
                        </li>
                        <li>
                            <a href="#">Barigui Men</a>
                            <ul class="submenu">
                                <li>
                                    3441-0211            
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>`

    // foooter-----------------------
    footer.innerHTML = `<footer>       
        <abbr title="T.i"><a href="informatica/pricipal.html"><img src="image/t.i.png" alt="Informatica"></a></abbr>
        <abbr title="HOME"><a href=""><img src="image/home.png" alt="HOME"></a></abbr>
        <abbr title="Galeria"><a href="galeria/principal.html"><img src="image/galeria.png" alt="Perguntas"></a></abbr>
    </footer>`
}