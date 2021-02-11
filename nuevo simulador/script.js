/*
let nombre = prompt ('Ingrese su nombre');
document.write('Hola '+ nombre + ' bienvenido/a al simulador de Viajes de Buceo!')
*/

window.onload = function () {
    

    //ASIGNACION DE FUNCION EN EL EVENTO ONBLUR (PERDER FOCO) AL INPUT DE NOMBRE
    document.getElementById("nombreApellido").onblur = validarNombreApellido;
    document.getElementById("inlineFormCustomSelectPrefDias").onblur = validarComboDias;

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


function validarComboDias(e) {
    var indice = document.getElementById(e.target.id).selectedIndex;
    if( indice == null || indice == 0 ) {
        alert('no se ha seleccionado ninguna opcion');
    }else{
        console.log(indice);
        var cantidad=document.getElementById("inlineFormCustomSelectPrefCantidad");
        var tipo=document.getElementById("interesesbuceo");
        document.querySelector('#inlineFormCustomSelectPrefCantidad').innerHTML = '';
        document.querySelector('#interesesbuceo').innerHTML = '';
        if(indice==1){
            
            cantidad.options[cantidad.options.length] = new Option('Elige...', null);
            cantidad.options[cantidad.options.length] = new Option('2', '1');
            cantidad.options[cantidad.options.length] = new Option('4', '2');

            tipo.options[tipo.options.length] = new Option('Práctica /Entrenamiento', 'int-practica');
            tipo.options[tipo.options.length] = new Option('Buceo nocturno', 'int-nocturno');

        }else{
            cantidad.options[cantidad.options.length] = new Option('Elige...', null);
            cantidad.options[cantidad.options.length] = new Option('2', '1');
            cantidad.options[cantidad.options.length] = new Option('4', '2');
            cantidad.options[cantidad.options.length] = new Option('6', '3');
            cantidad.options[cantidad.options.length] = new Option('8', '4');

            tipo.options[tipo.options.length] = new Option('Práctica /Entrenamiento', 'int-practica');
            tipo.options[tipo.options.length] = new Option('Buceo en mar abierto', 'int-mar');
            tipo.options[tipo.options.length] = new Option('Buceo en lagos', 'int-lagos');
            tipo.options[tipo.options.length] = new Option('Buceo en esteros', 'int-esteros');
            tipo.options[tipo.options.length] = new Option('Naufragios', 'int-naufragios');
            tipo.options[tipo.options.length] = new Option('Fauna Marina', 'int-fauna');
            tipo.options[tipo.options.length] = new Option('Buceo en altura', 'int-altura');
            tipo.options[tipo.options.length] = new Option('Buceo nocturno', 'int-nocturno');
            tipo.options[tipo.options.length] = new Option('Buceo en cavernas', 'int-cavernas');
        }
    }

}

//VALIDAR CHECKBOX


//VALIDAR ENVIO DE FORMULARIO
function enviar(){
    alert("Se ha enviado el registro");
}

// VALIDAR EMAIL
function validar_email( email ) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

