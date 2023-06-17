<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "ippocanderle00@gmail.com";
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $subject = "Nuovo messaggio dal modulo di contatto";
  $headers = "From: $name <$email>";

  if (mail($to, $subject, $message, $headers)) {
    echo "Email inviata con successo.";
  } else {
    echo "Si è verificato un errore durante l'invio dell'email.";
  }
}
?>
