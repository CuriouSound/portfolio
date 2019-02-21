<?php

if (isset($_POST['message'])) {
    $email_destinataire = "robin.nota68@gmail.com";
    $sujetMail = "OFFRE EMPLOI PORTFOLIO";

    // Transforme les valeurs Post en variables, évite la faille XSS avec htmlspecialchars
    $nom = htmlspecialchars($_POST['nom']);
    $entreprise = htmlspecialchars($_POST['entreprise']);
    $mail = htmlspecialchars($_POST['mail']);
    $message = htmlspecialchars($_POST['message']);


    if(isset($nom, $entreprise, $mail, $message)) {
        
        $mailText = "Nom : " . $nom .
            " || Entreprise : " . $entreprise .
            " || Email : " . $mail .
            " || Message : " . $message;

        $email = mail($email_destinataire, $sujetMail, $mailText);
        
        if($email){

            // On envois au fichier les données via Twig
            echo ('message Envoyé');
        }
        else {
            // On envois au fichier les données via Twig
            echo ('Erreur');
        }
    }
}