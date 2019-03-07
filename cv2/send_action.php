<?php
//variable from contact
$nombre = $_POST['contacName'];
$correo = $_POST['contactEmail'];
$subject = $_POST['contactSubject'];
$mensaje = $_POST['contactMessage'];

//destinatary
$destinatario ="iw.developsv@gmail.com";
$asunto ="Message from webCv2";

$carta = "De : $nombre \n";
$carta.= "Correo: $correo \n";
$carta.= "Subject: $subject \n";
$carta.= "Message: $mensaje \n";

// sending email
mail($destinatario,$asunto,$carta);
header('Location: index.html');
?>