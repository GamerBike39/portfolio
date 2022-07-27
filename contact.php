<?php
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'champidub@gmail.com';
    $subject = 'Message de '.$name;
    $body = '<h1>Message de '.$name.'</h1>
    <p>'.$message.'</p>';
    $headers = 'From: '.$email."\r\n"<div class="fom"></div>
    'Reply-To: '.$email;
    if(mail($to, $subject, $body, $headers)){
        echo '<div class="alert alert-success">Votre message a bien été envoyé</div>';
    }else{
        echo '<div class="alert alert-danger">Une erreur est survenue lors de l\'envoi du message</div>';
    }
}
?>