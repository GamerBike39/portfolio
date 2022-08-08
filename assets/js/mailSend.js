function envoieMail() {
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    const reponseEnvoie = document.querySelector(".reponseEnvoie");
    if (nom == "" || email == "" || message == "") {
        reponseEnvoie.textContent = "Veuillez remplir tous les champs";
    } else if (!regex.test(email)) {
        reponseEnvoie.textContent = "Veuillez entrer une adresse mail valide";
    } else {
        reponseEnvoie.textContent = "Votre message a bien été envoyé";
    }
}
envoieMail();