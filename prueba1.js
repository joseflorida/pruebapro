// defino variables
var palabra0=[];
var condicion=true;
var intentos=0;
var aciertos=0;

// buscamos la palabra aletoria dentro de la array1
var array1 = ["puerta","coche","lampara","foto","raton"];
aleatoria = Math.floor(Math.random()*(array1.length));
adivinar = array1[aleatoria];
console.log(adivinar);
// pregunta 1 nos pide el numero de erros y valida que sea entre 5 y 10 y que no sea una letra
var num_int=prompt("Dime cuantos errores quieres entre 5 y 10");

while(condicion){
  if (isNaN(num_int)){
    num_int= prompt("tiene que ser un numero entre 5-10 y tampoco puede ser una letra");

  }
  else if(num_int<5 || num_int>10) {
      num_int= prompt("tiene que ser un numero entre 5-10 y tampoco puede ser una letra");
  }
  else {
    condicion=false;
  }
}
// convierte la palabra aleatoria de la array en 0
for (var i = 0; i < adivinar.length; i++) {
    palabra0[i]='0';
}
// cuenta los errores del usuario
while (intentos<5 && aciertos<adivinar.length) {
condicion=true;
  var letrauser =prompt("Dame letra");
  // pregunta2 : si el usuario introduce fin el juego terminara
  if (letrauser=="FIN") {
    intentos=1444;
    alert("Juego terminado");
  } else {


  while (condicion) {
      if (isNaN(letrauser)) {
        condicion=false;
      } else {
          var letrauser = prompt("Introduce un letra, no un numero "," ");
          condicion=true;
        }
      }
  var acertado=false;
  for (var i = 0; i < adivinar.length; i++) {
    if (adivinar.charAt(i)==letrauser) {
      palabra0[i]=adivinar.charAt(i);
      acertado=true;
      aciertos++;
      console.log(aciertos);
    }
  }
    
  // nos dice al introducir la letra si acertaste o la letra no estacv en la palbara aleatoria
  if (acertado==true) {
    alert("has acertado,bien echo");
  } else {
    alert("letra no encontrada");
    intentos++;
  }
}
}
console.log(palabra0);
