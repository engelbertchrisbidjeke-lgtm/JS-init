export {bestMark, simplify, toSentence, filtering, ranking}

// trouver la note la plus eleve

function bestMark(tableau) {
    let curseur = 0

    tableau.array.forEach(element => {
        if (element > curseur) {
            curseur = element
        }
    });
    return curseur
}

// convertire un tableau en phrase

function toSentence(tableau) {
    let phrase = ""

    tableau.forEach(element => {
        phrase = phrase + " " +element
    });
    return phrase.trim()
}

//retirer les doublons d'une tableau

function filtering(tableau) {
    const set = new Set(tableau);
    let tableauFilte = [... set]
    return tableauFilte
}

//classer les age

function ranking(tableau) {
    return tableau.sort()
}

//applatir les commnande

function simplify(tableau) {
    const tab =[]
    let index = 0
    tableau.forEach(element => {
        element.forEach(el => {
            tab[index] = el
            index++
        });

    });
    return tab
}

console.log(simplify([[1, 2, 3,],[4, 5, 6]]))