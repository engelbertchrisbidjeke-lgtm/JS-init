const paire = []
const impaire = []

for (let index = 0; index < 100; index++) {
    if (index%2 == 1) {
        impaire.push(index)

    } else {
         paire.push(index)

    }
}

console.table(paire)
console.table(impaire)
 
let test = "ma phrase de test"


