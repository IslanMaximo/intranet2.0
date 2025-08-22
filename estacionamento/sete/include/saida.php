<?php

     $banco = new mysqli("127.0.0.1", "root", "", "bd_estacionamento");
    date_default_timezone_set('America/Sao_Paulo');

    $horaAtual = date('H:i:s');
    $vaga = $_POST['saida'];

    $busca = $banco -> query("select * from patio where vaga = '$vaga' and hora_s = ''");

    if($busca-> fetch_object() == ''){
        echo "<script>window.alert('Vaga não ocupada')</script>";
    }else{
        $busca = $banco -> query("select placa from patio where vaga = '$vaga' and hora_s = ''");

        $insert = $banco-> query("update patio set hora_s = '$horaAtual' where vaga = '$vaga' and hora_s = '' limit 1");
        echo ("<script> window.alert('Cadastro de Saida realizado com sucesso !')</script>")
        
    }

   
