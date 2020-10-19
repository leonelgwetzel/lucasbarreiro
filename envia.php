<?php 
    $remitente = $_POST['email'];
    $destinatario = 'contacto@lbmalternativa.com';
    $asunto = 'CONSULTA LUCAS BARREIRO WEB.';

    $cuerpo = "Nombre y apellido: " . $_POST["nombre"] . "\r\n"; 
    $cuerpo .= "Email: " . $_POST["email"] . "\r\n";
    $cuerpo .= "Consulta: " . $_POST["consulta"] . "\r\n";


        $headers  = "MIME-Version: 1.0\n";
        $headers .= "Content-type: text/plain; charset=utf-8\n";
        $headers .= "X-Priority: 3\n";
        $headers .= "X-MSMail-Priority: Normal\n";
        $headers .= "X-Mailer: php\n";
        $headers .= "From: \"".$_POST['nombre']." \" <".$remitente.">\n";

        mail($destinatario, $asunto, $cuerpo, $headers);
        
        header("Location:index.html#contacto");
?>
