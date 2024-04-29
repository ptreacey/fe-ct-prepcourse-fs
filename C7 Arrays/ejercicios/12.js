function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let arrayMayus = array.map(function (elemento,){
    return elemento.toUpperCase()
  })
  return arrayMayus
}

module.exports = convertirStringAMayusculas;
