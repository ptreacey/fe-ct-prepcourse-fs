function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let a = []
   for (i = 0; i < arrayOfStrings.length; i++){
      if(arrayOfStrings[i].startsWith("a")){
         a.push(arrayOfStrings[i])
      }
   }return a
}

module.exports = filter;
