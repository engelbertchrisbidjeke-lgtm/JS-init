export {
  extraireNom,
  transform,
  pwGen,
  remplacer,
  caracterCount,
  wordReplace,
  capitalize,
};

//valider un email ------------------------------in process----------------------
/*
condition de validation:
- doit contenir au moin 1 caractere avant le @
- doit contenir un @
- doit contenir un nom de domaine
- le nom de domaine est constitue d'une suite de caractere, d'un point suivie de com, io, net, ia, zh.
- l'email doit a la base etre une chaine de caractere
*/

const email = "valide@test.io"; // "@invalide.com" i"nvalidetest.net" "ivalide", "ivalide@testcom"

function validerEmail(email) {}

//extraire le nom avant le @ dans un email
function extraireNom(email) {
  const tabNom = email.split("@");
  return tabNom[0];
}

//convertire le titre de l'article en le-titre-de-l-article

function transform(phrase) {
  let phraseTiret = "";
  for (let index = 0; index < phrase.length; index++) {
    phraseTiret = phrase.replace(" ", "-");
    phrase = phraseTiret.replace(" ", "-");
    phraseTiret = phrase.replace("'", "-");
    phrase = phraseTiret.replace("'", "-");
  }
  return phraseTiret;
}

//generer un mot de passe aleatoire de 8 caractere

function pwGen() {
  const caractere = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
  ];
  const passw = [];
  let passWord = "";

  for (let index = 0; index <= 8; index++) {
    passw.push(caractere[Math.floor(Math.random() * caractere.length)]);
  }
  passw.forEach(function (element) {
    passWord = passWord + element;
  });
  return passWord;
}

//diviser "a,b,c" en [a, b, c]
function remplacer(chaine) {
  const tableau = chaine.split(",");
  return tableau;
}

//COMPTER LE NOMBRE DE "a" DANS "banana"
function caracterCount(chaine, caractere) {
  let count = 0;
  for (let index = 0; index <= chaine.length; index++) {
    if (chaine.at(index) == caractere) {
      count++;
    }
  }
  return count;
}

//remplacer un mot

function wordReplace(phrase, mot, nouveau) {
  if (!phrase.includes(mot)) {
    console.log("rien a remplacer");
    return;
  }
  const nouvellePhrase = phrase.replace(mot, nouveau);
  return nouvellePhrase;
}

//maitre en maj les premiere lettre
function capitalize(text) {
  if (typeof text == "string") {
    const table = text.split(" ");

    let upperTable = table.map(function (value) {
      let maj = value.slice(0, 1);
      maj = maj.toUpperCase();
      let rest = value.slice(1, value.length);
      return maj + rest;
    });
    let upperCasedWord = "";
    upperTable.forEach(function (element) {
      upperCasedWord = upperCasedWord + " " + element;
    });

    console.log(upperCasedWord);
    return;
  }
  console.log("seul les chaines de caracteres sont acceptees");
}
//masquer numero
function masquerNumero(numero, qte) {
    let numeroConverti
    if (typeof numero == "number") {
        numero = numero,toString()
    }
    numeroConverti = (numero.slice(-qte+1)).padStart()
}