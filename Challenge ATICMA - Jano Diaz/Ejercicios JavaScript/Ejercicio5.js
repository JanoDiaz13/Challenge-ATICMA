
var var1 = [1,2,4,6,7,8]
var var2 = [1,2,4,5,6,7,8]
var newVar = []

for(var i=0; i<var2.length; i++){
    
   newVar = var1.concat(var2)

}
newVar.sort(function(a,b){return a-b})

document.writeln("Nuevo array: "+ newVar)
