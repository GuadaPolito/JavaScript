/*
let nombre = prompt ('Ingrese su nombre');
document.write('Hola '+ nombre + ' bienvenido/a al simulador de Viajes de Buceo!')
*/

window.onload = function () {
    

    //ASIGNACION DE FUNCION EN EL EVENTO ONBLUR (PERDER FOCO) AL INPUT DE NOMBRE
    document.getElementById("nombreApellido").onblur = validarNombreApellido;
    document.getElementById("inlineFormCustomSelectPrefDias").onblur = validarCombos;
    //document.getElementsByClassName("select custom-select my-1 mr-sm-2").onblur = validarCombos;
    //document.getElementsByClassName('.select,.custom-select,.my-1,.mr-sm-2').onblur = validarCombos;
}


function validarNombreApellido() {
    var valor = document.getElementById("nombreApellido").value;
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        alert('el nombre es un valor incorrecto!');
    }
}

function validarCombos(e) {
    console.log(e.target);
    var indice = document.getElementById(e.target.id).selectedIndex;
    if( indice == null || indice == 0 ) {
        alert('no se ha seleccionado ninguna opcion');
    }
}

document.getElementById("customControlPrivacidad").onclick = enviar;

//VALIDAR CHECKBOX


//VALIDAR ENVIO DE FORMULARIO
function enviar(){
    alert("Se ha enviado el registro");
}

