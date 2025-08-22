<?php

    $banco = new mysqli("127.0.0.1", "ti2", "Acer@2023", "bd_estacionamento");
    date_default_timezone_set('America/Sao_Paulo');
    
    $placa = $_GET['placa'];
    $vaga = $_GET['vaga'];
    $horaAtual = date('H:i:s');
    $dataAtual = date('Y-m-d');

    $buscaPlaca = $banco->query("select * from veiculos where placa = '$placa'");

    if($buscaPlaca->fetch_object() != ''){
        $insert = $banco-> query("insert into patio (id, placa,date, hora_e, hora_s, vaga) value ('', '$placa', '$data', '$horaAtual', '', '$vaga' )");
        echo ("<script> window.alert('Veiculo Cadastrado e Estacionado com sucesso !')</script>")

    }else{
        header("location: cadastro.html");
        exit;
    }
?>