function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let arrayxindice = array.map(function (elemento, index){
    return elemento*index
  })
  return arrayxindice
}

module.exports = multiplicarElementosPorIndice;
