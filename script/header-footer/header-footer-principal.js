//window.onload = carregar()

//let footer = document.querySelector('footer.principal')


function menu(mn){
let menu = document.querySelector('div.menu');

    if(window.innerWidth >900 ){
        if(mn == 'menu' && menu.style.display == 'inline-block'){
            menu.style.display = 'none'
            document.querySelector('header').style.width ='30px'
            document.querySelector('div#banner').style.width = 'calc(100% - 30px)'
            const tela = window.innerWidth
            console.log = (tela)
        }else{
            menu.style.display = 'inline-block'
            document.querySelector('header').style.width ='130px'
            document.querySelector('div#banner').style.width = 'calc(100% - 130px)'
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

