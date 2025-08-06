

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

