const local = JSON.parse(localStorage.getItem("user"));

if (local != null) {
    formulaire.style.display = "none";
    h1.textContent = 'Bonjour ${local.nom}, tu as  ${local.age}';

}
envoyer.onclick = () => {

    const user = {
        nom: nom.value,
        age: age.value
    }

    localStorage.setItem("nom", JSON.stringify(user));
    document.location.reload();
}

clear.onclick = () => {
    localStorage.clear();
    document.location.reload();
}