import { caracterCount, extraireNom, transform, pwGen, remplacer, wordReplace} from "./String.js";
import { bestMark, simplify, toSentence, filtering, ranking } from "Array.js";

let table = [1, 43, 34, 66, 66, 78, 78, 98, 12, 43, 4]

console.log(caracterCount("banana", "a"))
console.log(extraireNom("chris@gmail.com"))
console.log(transform("le titre de l'article"))
console.log(pwGen())
console.log(remplacer("a,b,c"))
console.log(wordReplace("le chat dort", "chat", "chien"))


console.log(bestMark(table))
console.log(ranking(table))
console.log(filtering(table))
console.log(toSentence(["bonjour", "je", "m'appel", "chris"]))
console.log(simplify(table))