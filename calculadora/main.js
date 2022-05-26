
function enviarOperacion(){
    if (operacion.value == "sumar") {
      sumar();
    } else if (operacion.value == "restar") {
      restar();
    } else if (operacion.value == "multiplicar") {
      multiplicar();
    } else {
      dividir();
    }
  }

function sumar(){
    var num1 = parseFloat(document.getElementById("numero1").value);
    console.log(num1);
    var num2 = parseFloat(document.getElementById("numero2").value);
    console.log(num1 + num2);
    document.getElementById("resultado").innerHTML = num1 + num2;
  }

function restar(){
    var num1 = parseFloat(document.getElementById("numero1").value);
    console.log(num1);
    var num2 = parseFloat(document.getElementById("numero2").value);
    console.log(num1 + num2);
    document.getElementById("resultado").innerHTML = num1 - num2;
  }

function multiplicar(){
    var num1 = parseFloat(document.getElementById("numero1").value);
    console.log(num1);
    var num2 = parseFloat(document.getElementById("numero2").value);
    console.log(num1 + num2);
    document.getElementById("resultado").innerHTML = num1 * num2;
  }

function dividir(){
    var num1 = parseFloat(document.getElementById("numero1").value);
    console.log(num1);
    var num2 = parseFloat(document.getElementById("numero2").value);
    console.log(num1 + num2);
    document.getElementById("resultado").innerHTML = num1 / num2;
  }