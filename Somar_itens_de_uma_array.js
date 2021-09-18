//Maneiras de somar itens dentro de uma Array

var total = 0;
var numerosArray = [1, 25, 96, 35, 78, 69, 222, 58, 36];
for ( var i = 0; i < numerosArray.length; i++ ){
   total += numerosArray[i];
}
console.log(total);


var numeros = [10, 20, 30, 40, 50, 60];
var total = numeros.reduce(function(total, numero){
return total + numero;
}, 0);
console.log(total);


var numeros = [5, 10, 30, 44, 56, 60];
var total = numeros.reduce((total, numero) => total + numero, 0);
console.log(total);