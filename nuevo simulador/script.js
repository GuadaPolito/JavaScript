$(document).ready(function(){

    //ASIGNACION DE FUNCION EN EL EVENTO ONBLUR (PERDER FOCO) AL INPUT DE NOMBRE
    //document.getElementById("nombreApellido").onblur = validarNombreApellido;
    //document.getElementById("inlineFormCustomSelectPrefDias").onchange = validarComboDias;
   

    $('#inlineFormCustomSelectPrefDias').blur(function() {
        validarComboDias($(this).val());
    });

    $("#email").keyup(function(){
        if(validateEmail()){
            // si el email es válido
            // borde verde
            $("#email").css("border","2px solid green");
            // etiqueta
            $("#emailMsg").html("<p class='text-success'>Válido</p>");
        }else{
            // si el email no es válido
            // borde rojo
            $("#email").css("border","2px solid red");
            $("#emailMsg").html("<p class='text-danger'>Inválido</p>");
        }
        
    });

});

function validateEmail(){
    // get value of input email
    var email=$("#email").val();
    // expresiones regulares
     var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
     if(reg.test(email)){
         return true;
     }else{
         return false;
     }

}

function cambioDuracionViaje(X){
    if(X == 1){
      $("#radio1_2").attr('disabled','disabled');
      $("#radio1_2").prop('checked', false);
      $("#radio1_3").attr('disabled','disabled');
      $("#radio1_3").prop('checked', false);
    }else{
      $("#radio1_2").removeAttr('disabled');
      $("#radio1_3").removeAttr('disabled');
      
    }
  }

  function cambioExperiencia(X){
    $("#checkbox_0").prop('checked', false);
    $("#checkbox_1").prop('checked', false);
    $("#checkbox_2").prop('checked', false);
    $("#checkbox_3").prop('checked', false);
    $("#checkbox_4").prop('checked', false);
    $("#checkbox_5").prop('checked', false);
    $("#checkbox_6").prop('checked', false);
    $("#checkbox_7").prop('checked', false);
    $("#checkbox_8").prop('checked', false);
    if(X == 1){
      $("#checkbox_2").attr('disabled','disabled');
      $("#checkbox_2").prop('checked', false);
      $("#checkbox_6").attr('disabled','disabled');
      $("#checkbox_6").prop('checked', false);
      $("#checkbox_7").attr('disabled','disabled');
      $("#checkbox_7").prop('checked', false);
      $("#checkbox_8").attr('disabled','disabled');
      $("#checkbox_8").prop('checked', false);
    }else{
      $("#checkbox_2").removeAttr('disabled');
      $("#checkbox_6").removeAttr('disabled');
      $("#checkbox_7").removeAttr('disabled');
      $("#checkbox_8").removeAttr('disabled');
      
    }
  }

//VALIDAR ENVIO DE FORMULARIO
function enviar(){
    alert("Se ha enviado el registro");
}

// VALIDAR EMAIL
function validar_email( email ) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}



