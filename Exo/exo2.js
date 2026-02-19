const ageTest = 16
mineurOuMajeur(ageTest)

function mineurOuMajeur(age) {
    if (typeof age == "string" || age <= 0) {
        console.log("vous devez entrer un age valide")
        return
    }
    const statut = age < 14 ? "enfant" : (age >= 14 && age < 21)? "adolescent":"adulte"
    console.log("vous etes " + statut)
    return
}
