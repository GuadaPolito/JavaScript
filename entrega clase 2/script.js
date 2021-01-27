var nombre = prompt('Ingrese aquí su nombre');
console.log("Nombre:" + nombre);

var apellido = prompt('Ingrese aquí su apellido');
console.log("Apellido:" + apellido);

var resultado = nombre + apellido;
alert("Bienvenida/o " + nombre + " " + apellido);

//parte 2 con condicional

edad = prompt ('¿Cuál es tu edad?');

edad = Number(edad);

if (edad <8){
    alert ('Lo siento, aún eres muy pequeño');
}
if (edad >8 && edad <=12){
    alert ('Eres un niño');
}
if (edad >13 && edad <=20) 
    {alert ('Eres un adolescente');
}
if (edad >21 && edad <=30) 
    {alert ('Eres un adulto joven');
}
if (edad >31 && edad <=59) 
    {alert ('Eres un adulto');
}
if (edad >56 && edad <=99) 
    {alert ('Estás en la tercera edad');
}