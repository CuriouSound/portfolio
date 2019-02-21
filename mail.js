var formulaire = document.querySelector("#formulaire");

formulaire.addEventListener("submit", function(evenement) { 
    verif_formulaire(formulaire, evenement);
});

function verif_formulaire(formulaire, evenement) {
    var nom = formulaire.querySelector("#nom"),
        entreprise = formulaire.querySelector('#entreprise'),
        mail = formulaire.querySelector("#mail"),
        message = formulaire.querySelector("#message");

    // Vérification champ Nom
    if(nom.value.length < 3)  {
        nom.placeholder = "Veuillez entrer votre nom";
        evenement.preventDefault();
    }
    // Vérification champ Entreprise
    if(entreprise.value.length < 3) {
        entreprise.placeholder = "Veuillez entrer un nom valide"
        evenement.preventDefault();
    }
    // Vérification champ email
    if(mail.value.length < 6) {
        mail.placeholder = "Adresse mail non conforme";
        evenement.preventDefault();
    }
    else if (mail.value.indexOf('@') == -1) {
        mail.placeholder = "Il vous manque un @";
        evenement.preventDefault();
    }
    // Vérification champ message
    if(message.value.length < 10){
        message.placeholder = "Votre message est trop court";
        evenement.preventDefault();
    }
}