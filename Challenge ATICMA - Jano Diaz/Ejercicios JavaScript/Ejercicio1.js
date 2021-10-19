
document.write("Se encontraron "+CantidadMayusculas("CaRaCtErEs")+ " mayusculas")

function CantidadMayusculas(cadena) {
  var cuenta = 0
  var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  for (var i = 0; i < mayusculas.length; i++) {
    for (var x = 0; x < cadena.length; x++) {
     if(cadena[x] == mayusculas[i]){
      cuenta += 1
     }
    }
  }
  return cuenta

 }

