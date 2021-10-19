var numeros = []
var cant = prompt('Ingrese la cantidad de numeros a ingresar')

for (var i=0; i < cant; i++){
    numeros[i] = prompt ("ingrese un numero")
}

document.write('Contenido array ' +cant+' espacios: ')
for(var i=0; i<cant;i++){
    document.write(numeros[i]+' ')
}
