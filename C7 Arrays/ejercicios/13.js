function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let arrayPar = array.filter(function (elemento,){
    return elemento % 2 == 0
    })
  return arrayPar
}

module.exports = filtrarNumerosPares;
