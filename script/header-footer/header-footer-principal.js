window.onload = carregar()

let footer = document.querySelector('footer.principal')

function menu(mn){
    let menu = document.querySelector('div.menu');
    
    if(mn == 'menu' && menu.style.display == 'block'){
        menu.style.display = 'none'
    }else{
        menu.style.display = 'block'
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
function carregar(){
    // foooter-----------------------
    footer.innerHTML = `       
        <abbr title="T.i"><a href="informatica/pricipal.html"><img src="image/t.i.png" alt="Informatica"></a></abbr>
        <abbr title="HOME"><a href=""><img src="image/home.png" alt="HOME"></a></abbr>
        <abbr title="Galeria"><a href="galeria/principal.html"><img src="image/galeria.png" alt="Perguntas"></a></abbr>`
}
