const text = "mon nom est chris";
capitalize(text);

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























/*
function capitalize2(text) {
  if (typeof text == "string") {
    console.log(text.at(0).toUpperCase())
    return;
  }
  console.log("seul les chaine de caracteres sont acceptees");
}
*/
/*
function capitalize2(text) {
  if (typeof text == "string") {
    const table = text.split(" ");

    let upperTable = table.map(function (value) {

      return value.at(0).toUpperCase()+value.slice(1, value.length());
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
*/