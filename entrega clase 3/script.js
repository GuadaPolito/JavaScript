// 1- NOTA

function calcularNota(nota) {
    if(nota > 10){
        alert ('LA NOTA DEBE SER IGUAL O MENOR A 10');
    }else if(nota >=7){
        alert ('APROBASTE :) !!!');
    }else{
        alert ('DESAPROBASTE :( ...');
    }
}

let notaCapturada1 = prompt ('Ingrese una nota');

calcularNota(notaCapturada1);

// 2 - PROMEDIO FINAL

function calcularPromedio(nota1,nota2,nota3) {
    
    var resultado =  (notaCapturada2 +  notaCapturada3 +  notaCapturada4)/3;
    
    if(resultado >=7){
        alert ('Felicitaciones, aprobaste. Tu promedio final es un ' + resultado);
    }
    else{
        alert ('Deberás volver a rendir, Desaprobaste. Tu promedio final es un ' + resultado);
    }
}

let notaCapturada2 = Number(prompt ('Ingrese nota 1er trimestre'));

let notaCapturada3 = Number(prompt ('Ingrese nota 2do trimestre'));

let notaCapturada4 = Number(prompt ('Ingrese nota 3er trimestre'));

calcularPromedio(notaCapturada2,notaCapturada3,notaCapturada4);


// 3- NOTAS 5 ALUMNOS y VALIDACIÓN

let notaCapturada5 = Number(prompt ('Ingrese nota 1er trimestre de Alejandro'));
    if (notaCapturada5 >=7) {
    alert ('Felicitaciones, aprobaste!');
    }    
    else {
    alert ('Deberás volver a rendir, Desaprobaste');
    }

let notaCapturada6 = Number(prompt ('Ingrese nota 1er trimestre de Carolina'));
    if (notaCapturada6 >=7) {
        alert ('Felicitaciones, aprobaste!');
    }    
    else {
        alert ('Deberás volver a rendir, Desaprobaste');
    }

let notaCapturada7 = Number(prompt ('Ingrese nota 1er trimestre de Nala'));
    if (notaCapturada7 >=7) {
        alert ('Felicitaciones, aprobaste!');
    }    
    else {
        alert ('Deberás volver a rendir, Desaprobaste');
    }

let notaCapturada8 = Number(prompt ('Ingrese nota 1er trimestre de Rodrigo'));
    if (notaCapturada8 >=7) {
        alert ('Felicitaciones, aprobaste!');
    }    
    else {
        alert ('Deberás volver a rendir, Desaprobaste');
    }

let notaCapturada9 = Number(prompt ('Ingrese nota 1er trimestre de Claudio'));
    if (notaCapturada9 >=7) {
        alert ('Felicitaciones, aprobaste!');
    }    
    else {
        alert ('Deberás volver a rendir, Desaprobaste');
    }
