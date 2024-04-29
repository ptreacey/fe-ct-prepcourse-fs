function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  let str123 = ""
  let maxLength = Math.max(str1.length, str2.length, str3.length)
  for (let i = 0; i < maxLength; i++) {
    if (i < str1.length) {str123 += str1[i]}
    if (i < str2.length) {str123 += str2[i]}
    if (i < str3.length) {str123 += str3[i]}
  }
  return str123
}

module.exports = combine;