
function carregar(){
//link CSS----------------------------------------------
    document.querySelector('head').innerHTML = `
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="media.css" media="all">`
    
//link MENU----------------------------------------------
    document.querySelector('header').innerHTML = `<nav>
            <p class="menu" onclick="menu('menu')"> &#9776;</p>
                <div class="menu" id="menu">
                    <p onclick="menu('agenda')">&#128203; AGENDAS / COMANDAS</p>
                        <div class="smenu" id="agenda">
                            <a href="agendas/abertura.comanda.html">
                                <p> Agenda Profissionais</p>
                            </a>
                            <a href="agendas/agenda.profissionais.html">
                                <p> Abertura de Comanda</p>
                            </a>
                            <a href="">
                                <p> Historico da Comanda</p>
                            </a>
                        </div>
                    <p onclick="menu('interno')">&#127970; CONTROLE INTERNO</p>
                        <div class="smenu" id="interno">
                            <p onclick="menu('clientes')">Clientes</p>
                                <div class="smenu2" id="clientes">
                                    <p>Cadastro de Clientes</p>
                                    <p>Clientes em Débito</p>
                                    <p>Clientes com Crédito</p>
                                </div>
                            <p onclick="menu('profissionais')">Profissionais</p>
                                <div class="smenu2" id="profissionais">
                                    <p>Todos os Profissionais</p>
                                </div>
                            <p onclick="menu('produtos')">Produtos</p>
                            <div class="smenu2" id="produtos">
                                <p><a href="produtos.html">Todos os produtos</a></p>
                                <p>Movimentação de estoque</p>
                            </div>
                        </div>
                        <p onclick="menu('financeiro')">&#128176; FINANCEIRO</p>
                        <div class="smenu" id="financeiro">
                            <p>Controle de caixa</p>
                            <p>Entrada e Saida</p>
                            <p>Comissões de Profissionais</p>
                        </div>
                        <p>&#9881; CONFIGURAÇÕES</p>
                </div>
        </nav>`
}
//menu cel//---------------------------------------------------------------
if(window.innerWidth  >= 900){
    function menu(mn){
            let menu = document.querySelector(`div#${mn}`);
            console.log(mn)
            if(menu.style.display == 'none'){
                menu.style.display = 'inline-block';
                document.querySelector('header').style.width = '220px'
            
            }else if(mn != 'menu'){
                menu.style.display = 'none';
            }else{
                menu.style.display = 'none';
                document.querySelector('header').style.width = '50px'
            
            }              
        }   
}else{
    function menu(mn){
            let menu = document.querySelector(`div#${mn}`);
            console.log(mn)
            if(menu.style.display == 'none'){
                menu.style.display = 'inline-block';
            }else{
                menu.style.display = 'none';
            }              
        }   
}

//---------------------------------------------------------------
window.onload = carregar();