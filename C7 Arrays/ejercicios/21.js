function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var mesesRequeridos = ['Enero', 'Marzo', 'Noviembre'];
  
  var mesesEncontrados = array.filter(function(mes){
    return mesesRequeridos.includes(mes)
  })

  var estanTodos = mesesRequeridos.every(function(mes){
    return mesesEncontrados.includes(mes)
  })

  if (estanTodos) return mesesEncontrados
  else return "No se encontraron los meses pedidos"
  }

module.exports = mesesDelAño;
