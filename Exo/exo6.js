/*
===================tableau==================================
sort() classe les element d'un tableav par ordre croissant pour des chaine de caratere. pour des nombre il faut y ajouter une fonction de tri en argument 
sort((a, b)=>a-b):: la foncton va prendre l'element actuel et celui qui le suis, soustraire, si le resultat est negatif, c'est le seconde elemt qui est superieur, si positif, c'est le premier, si null aucun chagement.


==================chaine de caractere=======================
padStart(): utilisee pour rajouter des element au debut de la chaine de caractere pour qu'elle atteigne une longuer precise.
String.padStart(longueurDesire, caractere)

*/

function somme(tableau) {
    let somme
    tableau.forEach(element => {
        if (typeof element =="number") {
            somme = element+somme
        }
    });
    return somme
}

function filtre(tableau) {
    return tableau.filter(function (element) {
        element%2 === 0
    })
}
/*
function triCroissant(tableau) {
    return tableau.sort(function(n1, n2) {
        return n1 - n2
    })
}
*/
function triCroissant(tableau) {
    return tableau.sort((n1, n2)=>n1-n2)
}
