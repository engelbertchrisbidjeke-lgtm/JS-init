const ageDefinit = "bebe" //"bebe" "enfant" "adolescent" "adulte" "vieux"
mineurOuMajeur(ageDefinit)

function mineurOuMajeur(age) {
    if (typeof age != "string") {
        console.log("entrez un type valide")
        return
    }

    switch (age) {
        case "bebe":
            console.log("tient prend un biberons")
            break;
        case "enfant":
            console.log("a ton age tu fait l'ecole primaire")
            break;
        case "adolescent":
            console.log("t'es un jeune collegien")
            break;
        case "adulte":
            console.log("un.e monsieur/dame tout.e fait")
            break;
        case "vieux":
            console.log("tvous avez vecu longtemp, on vous dois du respect")
            break;
        default:
            console.log("cette valeur n'est pas prise en charge")
            break;
    }
    return
}

