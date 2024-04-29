function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  for (i = 0; i < numeros.length; i++) {
    for (k = 0; k < numeros.length; k++){
      if (numeros[i] == numeros[k] && i != k){
        return numeros[i]
      }
    }
  }
  return undefined; 
}

module.exports = encontrarElementoRepetido;