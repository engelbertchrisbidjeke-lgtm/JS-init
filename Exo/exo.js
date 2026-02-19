const n1 = 10;
const n2 = "3";

modulo(n1, n2);

function division(nbr1, nbr2) {
  if (!areGoodEntry(nbr1, nbr2)) {
    console.log("entrez deux nombre");
    return;
  }
  console.log(nbr1 / nbr2);
  return;
}

function addtion(nbr1, nbr2) {
  if (!areGoodEntry(nbr1, nbr2)) {
    console.log("entrez deux nombre");
    return;
  }
  console.log(nbr1 + nbr2);
  return;
}

function soustraction(nbr1, nbr2) {
  if (!areGoodEntry(nbr1, nbr2)) {
    console.log("entrez deux nombre");
    return;
  }
  console.log(nbr1 - nbr2);
  return;
}

function multiplication(nbr1, nbr2) {
  if (!areGoodEntry(nbr1, nbr2)) {
    console.log("entrez deux nombre");
    return;
  }
  console.log(nbr1 * nbr2);
  return;
}

function puissance(nbr1, nbr2) {
  if (!areGoodEntry(nbr1, nbr2)) {
    console.log("entrez deux nombre");
    return;
  }
  console.log(nbr1 ** nbr2);
  return;
}

function modulo(nbr1, nbr2) {
  if (!areGoodEntry(nbr1, nbr2)) {
    console.log("entrez deux nombre");
    return;
  }
  console.log(nbr1 % nbr2);
  return;
}

function areGoodEntry(nombre1, nombre2) {
  if (
    typeof nombre1 == "string" ||
    typeof nombre2 == "string" ||
    nombre2 == 0 ||
    nombre2 == null ||
    nombre2 == undefined ||
    nombre1 == undefined
  ) {
    return false;
  } else {
    return true;
  }
}

function isOneOfThemAString(nombre1, nombre2) {
  if (typeof nombre1 == "string" || typeof nombre2 == "string") {
    return true
  } else {
    return false
  }
}
function isOnOfThemeUndefined(nombre1, nombre2) {
    if (nombre2 == undefined || nombre1 == undefined) {
    return true
  } else {
    return false
  }
}

function isNullOrZero(nombre2) {
  if ( nombre2 == 0 || nombre2 == null) {
    return true
  } else {
    return false
  }
}