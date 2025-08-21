<pre><?php

    $banco = new mysqli("127.0.0.1", "ti2", "Acer@2023", "bd_estacionamento");
    date_default_timezone_set('America/Sao_Paulo');

    $placa = $_POST['cadastro-placa'];
    $fabricante = $_POST['cadastro-fabricante'];
    $modelo = $_POST['cadastro-modelo'];
    $vaga = $_GET['vaga'];
    $cor = $_POST['cadastro-cor'];
    $dataAtual = date('Y-m-d');
    $horaAtual = date('H:i:s');


    $buscaPlaca = $banco->query("select * from veiculos where placa = '$placa'");

    if($buscaPlaca->fetch_object() == ''){
        ///////////////entrada de dadis veiculos/////////////////////////
        $insert = $banco-> query("insert into veiculos (`placa`,fabricante, modelo, cor, date) value ('$placa', '$fabricante', '$modelo', '$cor', '$dataAtual')");

        //////////////////////Registro de dado de patio entrada//////////////////////
        $insert = $banco-> query("insert into patio (id, placa,date, hora, definicao, vaga) value ('', '$placa', '$dataAtual', '$horaAtual', 'E', '$vaga' )");
        header("location: entrada.html");
        exit;
    }else{
        //////////////////////Registro de dado de patio entrada//////////////////////
        $insert = $banco-> query("insert into patio (id, placa,date, hora, definicao, vaga) value ('', '$placa', '$dataAtual', '$horaAtual', 'E', '$vaga' )");
        header("location: entrada.html");
        exit;
    }


?>
