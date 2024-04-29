function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let arrayx2 = array.map(function (elemento,){
    return elemento*2
  })
  return arrayx2
}

module.exports = duplicarElementos;
