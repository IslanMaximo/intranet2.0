window.onload = carregamento()
let banner = document.querySelector('div#banner')
function carregamento(){
    let header = document.querySelector('header.taunay')
    let footer = document.querySelector('footer.taunay')

    //header----------------------------------------
    header.innerHTML = `
        <div id="navegacao">
            <nav>
                <ul class="menu">
                    <li>
                        <a href="taunay.html">Taunay</a>
                        <ul class="submenu">
                            <li>
                                3091-8686            
                        </ul>
                    </li>
                    <li>
                        <a href="../patio/patio.html">Patio</a>
                        <ul class="submenu">
                            <li>
                                3030-7676            
                        </ul>
                    </li>
                    <li>
                        <a href="../sete/sete.html">Sete</a>
                        <ul class="submenu">
                            <li>
                                3242-3963            
                        </ul>
                    </li>
                    <li>
                        <a href="../cabral/cabral.html">Cabral</a>
                        <ul class="submenu">
                            <li>
                                3254-4224            
                        </ul>
                    </li>
                    <li>
                        <a href="../juveve/">Juveve</a>
                        <ul class="submenu">
                            <li>
                                3254-6621            
                        </ul>
                    </li>
                    <li>
                        <a href="../patiom/">Patio Men</a>
                        <ul class="submenu">
                            <li>
                                99774-0026            
                        </ul>
                    </li>
                    <li>
                        <a href="../barigui/barigui.html">Barigui</a>
                        <ul class="submenu">
                            <li>
                                99771-0437            
                        </ul>
                    </li>
                    <li>
                        <a href="../bariguim/bariguim.html">Barigui Men</a>
                        <ul class="submenu">
                            <li>
                                3441-0211            
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>`

    // foooter-----------------------
    footer.innerHTML = `
        <abbr title="Estacionamento"><a href="../../estacionamento/etaunay.html"><img src="../../image/estacionamento.png" alt="Estacionamento"></a></abbr>
        <abbr title="Dúvidas"><a href="../../duvidas.html"><img src="../../image/questions.png" alt="Dúvidas"></a></abbr>
        <abbr title="HOME"><a href="../../index.html"><img src="../../image/home.png" alt="HOME"></a></abbr>
        <abbr title="Lista tel"><a href="lista.tel.html"><img src="../../image/lista-tel.png" alt="Perguntas"></a></abbr>
        <abbr title="Galeria"><a href="../galeria/principal.html"><img src="../../image/galeria.png" alt="Galeria"></a></abbr>`
}