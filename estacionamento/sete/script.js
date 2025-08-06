var placa = document.getElementById('placa')
let nvaga = document.getElementById('nvaga')
let cmodelo = document.getElementById('cadastro-modelo')
let cdata = document.getElementById('cadastro-data')

//Botões na pagina Estacionamento Taunay------
function entrar(){
    window.alert('[ENTRADA DE VEICULOS TAUNAY]')
    window.location.href = 'taunay/entrada.html'
}
function sair(){
    window.alert('[SAIDA DE VEICULOS TAUNAY]')
    window.location.href = 'taunay/saida.html'    
}
//botão na pagina de entrada-------
function eenviar(){

    if(placa.value.length == 0 || nvaga.value.length ==0 ){
        window.alert('[ERRO] preencha todos os campos')
    }else if(placa.value.length >=8 || placa.value.length < 6){
        window.alert('[ERRO] Número da placa invalida')
    }else if(Number(nvaga.value) > 12){
        window.alert('Não temos mais que 12 vagas')
    }
}
//Botão pagina de saida------
function ienviar(){
    if(nvaga.value.length == 0 || Number(nvaga.value) > 12){
        window.alert('[ERRO] Preencha o número da vaga corretamente')
    }
}
//Pagina de cadastro------------------
function cadastrar(){
    placa.value = ''
    cmodelo.value = ''
    if(placa.value.length == 0 && cmodelo.value.length == 0 && cdata.value.length ==0){
        window.alert('Preencha todos os campos')
    }else if(placa.value.length == 0 || placa.value.length >= 8 || placa.value.length < 6){
        window.alert('Preencha a placa corretamente')
    }else if(cmodelo.value.length == 0){
        window.alert('Preencha o modelo')
    }else if(cdata.value.length == 0 || cdata.value.length <= 9){
        window.alert('Preencha a data')
    }else{
        window.alert('Cadastro realizado com sucesso')
    }
    cmodelo.value = ''
    placa.value = ''
}