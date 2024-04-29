function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let notas = 0
  let promedio = 0
  for (i = 0; i < resultadosTest.length; i++){
    notas = notas + resultadosTest[i]
  }
  return promedio = notas / resultadosTest.length
}

module.exports = promedioResultadosTest;
