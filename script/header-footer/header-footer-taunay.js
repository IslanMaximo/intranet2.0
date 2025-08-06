window.onload = carregamento()
let banner = document.querySelector('div#banner')
function carregamento(){
    let header = document.querySelector('header.taunay')
    let footer = document.querySelector('footer.taunay')

    //header----------------------------------------
    header.innerHTML = `
        <nav>
            <div id="img" onclick="menu('menu')">
                <img src="../../image/menu.png">
            </div>
            <div id="unidades">
                <div class="menu">
                    <p id="menut" onclick="menu('taunay')">Taunay</p>
                        <div class="smenut">
                            <p><a href="unidades/taunay/lista.tel.html">Lista telefonica</a></p>
                            <p>Profissionais</p>
                        </div>
                    <p onclick="menu('sete')">Sete</p>
                        <div class="smenus">
                            <p>Lista telefonica</p>
                            <p>Profissionais</p>
                        </div>
                    <p onclick="menu('cabral')">Cabral</p>
                        <div class="smenuc">
                            <p>Lista telefonica</p>
                            <p>Profissionais</p>
                        </div>
                    <p onclick="menu('juveve')">Juveve</p>
                        <div class="smenuj">
                            <p>Lista telefonica</p>
                            <p>Profissionais</p>
                        </div>
                    <p onclick="menu('bariguim')">Bariguim</p>
                        <div class="smenubm">
                            <p>Lista telefonica</p>
                            <p>Profissionais</p>
                        </div>
                    <p onclick="menu('patiom')">Pátio</p>
                        <div class="smenupm">
                            <p>Lista telefonica</p>
                            <p>Profissionais</p>
                        </div>
                </div>
            </div>
        </nav>`
}
function menu(mn){
let menu = document.querySelector('div.menu');
let header = document.querySelector('header')

    if(window.innerWidth > 900 ){
        if(mn == 'menu' && menu.style.display == 'inline-block'){
            menu.style.display = 'none'
            header.style.width ='30px'
            header.style.height ='45px'
            header.style.background = 'rgba(128, 128, 128, 0.600)'
        }else{
            menu.style.display = 'inline-block'
            header.style.width ='96px'
            header.style.height ='310px'
            header.style.background = 'rgba(128, 128, 128, 0.900)'

        }
        //sub menu taunay-------------------------
            if(mn == 'taunay' && document.querySelector('div.smenut').style.display == 'none'){
                document.querySelector('div.smenut').style.display = 'block'
            }else{
                document.querySelector('div.smenut').style.display = 'none'
            }
            //sub menu sete-------------------------
            if(mn == 'sete' && document.querySelector('div.smenus').style.display == 'none'){
                document.querySelector('div.smenus').style.display = 'block'
            }else{
                document.querySelector('div.smenus').style.display = 'none'
            }
            //sub menu cabral-------------------------
            if(mn == 'cabral' && document.querySelector('div.smenuc').style.display == 'none'){
                document.querySelector('div.smenuc').style.display = 'block'
            }else{
                document.querySelector('div.smenuc').style.display = 'none'
            }
            //sub barigui men-------------------------
            if(mn == 'bariguim' && document.querySelector('div.smenubm').style.display == 'none'){
                document.querySelector('div.smenubm').style.display = 'block'
            }else{
                document.querySelector('div.smenubm').style.display = 'none'
            }
            //sub menu juveve-------------------------
            if(mn == 'juveve' && document.querySelector('div.smenuj').style.display == 'none'){
                document.querySelector('div.smenuj').style.display = 'block'
            }else{
                document.querySelector('div.smenuj').style.display = 'none'
            }
            
            //sub menu patio men-------------------------
            if(mn == 'patiom' && document.querySelector('div.smenupm').style.display == 'none'){
                document.querySelector('div.smenupm').style.display = 'block'
            }else{
                document.querySelector('div.smenupm').style.display = 'none'
            }
    }else{
        if(mn == 'menu' && menu.style.display == 'inline-block'){
                menu.style.display = 'none'
            }else{
                menu.style.display = 'inline-block'
            }
            //sub menu taunay-------------------------
            if(mn == 'taunay' && document.querySelector('div.smenut').style.display == 'none'){
                document.querySelector('div.smenut').style.display = 'block'
            }else{
                document.querySelector('div.smenut').style.display = 'none'
            }
            //sub menu sete-------------------------
            if(mn == 'sete' && document.querySelector('div.smenus').style.display == 'none'){
                document.querySelector('div.smenus').style.display = 'block'
            }else{
                document.querySelector('div.smenus').style.display = 'none'
            }
            //sub menu cabral-------------------------
            if(mn == 'cabral' && document.querySelector('div.smenuc').style.display == 'none'){
                document.querySelector('div.smenuc').style.display = 'block'
            }else{
                document.querySelector('div.smenuc').style.display = 'none'
            }
            //sub barigui men-------------------------
            if(mn == 'bariguim' && document.querySelector('div.smenubm').style.display == 'none'){
                document.querySelector('div.smenubm').style.display = 'block'
            }else{
                document.querySelector('div.smenubm').style.display = 'none'
            }
            //sub menu juveve-------------------------
            if(mn == 'juveve' && document.querySelector('div.smenuj').style.display == 'none'){
                document.querySelector('div.smenuj').style.display = 'block'
            }else{
                document.querySelector('div.smenuj').style.display = 'none'
            }
            
            //sub menu patio men-------------------------
            if(mn == 'patiom' && document.querySelector('div.smenupm').style.display == 'none'){
                document.querySelector('div.smenupm').style.display = 'block'
            }else{
                document.querySelector('div.smenupm').style.display = 'none'
            }
        
    }
}   