// prevenir l'utilisateur que l'envoie de mail c'est bien passée
function envoieMail() {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if (nom == "" || prenom == "" || email == "" || message == "") {
        alert("Veuillez remplir tous les champs");
    } else if (!regex.test(email)) {
        alert("Veuillez entrer une adresse mail valide");
    } else {
        alert("Votre message a bien été envoyé");
    }
}
envoieMail();