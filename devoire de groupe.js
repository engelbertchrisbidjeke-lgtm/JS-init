//valider un email
/*
condition de validation:
- doit contenir au moin 1 caractere avant le @
- doit contenir un @
- doit contenir un nom de domaine
- le nom de domaine est constitue d'une suite de caractere, d'un point suivie de com, io, net, ia, zh.
- l'email doit a la base etre une chaine de caractere
*/

const email = "valide@test.io" // "@invalide.com" i"nvalidetest.net" "ivalide", "ivalide@testcom"

function validerEmail(email) {
    
}


//extraire le nom avant le @ dans un email

function extraireNom(email) {

    const tabNom = email.split("@")
    return tabNom[0]
}

//console.log(extraireNom("valide@test.io"))

//convertire le titre de l'article en le-titre-de-l-article

/*
remplacer les espace et les apostrophe en tiret
*/

function transform(phrase) {
    let phraseTiret = ""
    for (let index = 0; index < phrase.length; index++) {
        phraseTiret = phraseTiret.replace(" ", "-");
    }
    return phraseTiret
}
console.log(transform("le titre de l'article"))