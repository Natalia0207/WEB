// flecha
const parOimparArrow = (number) => {
    // %2 === resto de la divición entre el numero y 2
  if (number % 2 == 0) {
    console.log(number + " es par.");
  } else {
    console.log(number + " es impar.");
  }
};
parOimparArrow(7);
parOimparArrow(4);

//Regular
function parOimpar(number) {
  if (number % 2 == 0) {
    console.log(number + " es par.");
  } else {
    console.log(number + " es impar.");
  }
};
parOimpar(3);
parOimpar(8);
