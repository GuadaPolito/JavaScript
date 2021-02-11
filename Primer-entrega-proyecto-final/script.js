// SIMULADOR PAQUETES DE VIAJES

function duracionviaje(diasviaje) {
    if(dias >2 && dias <=5){
        alert ('Opciones de viajes menor a 5 días: Sierra de la Ventana - Córdoba - Iguazú.');
    }else if(dias >5 && dias <=8){
        alert ('Opciones de viajes hasta 8 días: Bariloche y San Martín de los Andes - Mendoza y San Juan - Salta y Jujuy.');
    }else if(dias >8 && dias <=12){
        alert ('Opciones de viajes hasta 12 días: El Calafate y Ushuaia - Río de Janeiro y Búzios - Cartagena y San Andrés.');
    }else if(dias >12 && dias <=16){
        alert ('Opciones de viajes hasta 16 días: Miami y New York - Cuba - Panamá y Costa Rica.');
    }else if (dias >16 && dias <=30){
        alert ('Opciones de viajes hasta 30 días: España y Portugal - Italia y Grecia - India.');
    }else{
        alert ('Lo sentimos no tenemos opciones disponibles con los datos ingresados. Prueba menor a 30 días.');
    }
}

function presupuestoviaje(mipresupuesto) {
    if(presupuesto >15000 && presupuesto <=30000){
        alert ('Opciones de viajes entre $15000 y $30000: Sierra de la Ventana - Córdoba - Iguazú.');
    }else if(presupuesto >30000 && presupuesto <=60000){
        alert ('Opciones de viajes entre $30000 y $60000: Bariloche y San Martín de los Andes - Mendoza y San Juan - Salta y Jujuy.');
    }else if(presupuesto >60000 && presupuesto <=80000){
        alert ('Opciones de viajes entre $60000 y $80000: El Calafate y Ushuaia - Río de Janeiro y Búzios - Cartagena y San Andrés.');
    }else if(presupuesto >80000 && presupuesto <=140000){
        alert ('Opciones de viajes entre $80000 y $140000: Miami y New York - Cuba - Panamá y Costa Rica.');
    }else if (presupuesto >140000 && presupuesto <=220000){
        alert ('Opciones de viajes entre $140000 y $220000: España y Portugal - Italia y Grecia - India.');
    }else{
        alert ('Lo sentimos no tenemos opciones disponibles con los datos ingresados. Prueba menor a 30 días.');
    }
}

let nombre = prompt ('Ingrese su nombre');
    console.log('Hola '+ nombre + ' bienvenido/a al simulador de paquetes de viajes de Triglav!')

let dias = Number(prompt ('¿Qué duración te gustaría que tenga tu viaje? (en días)'))
    
    duracionviaje(dias);

let presupuesto = Number(prompt ('¿Cuál es tu presupuesto estimado por persona? (en pesos $AR)'))

    presupuestoviaje(presupuesto);

// PROBANDO OBJETOS CLASE 5

var paquetes = new Object();
    paquetes.destino = "Iguazú"
    paquetes.duracion = 5
    paquetes.alojamiento = "posada"
    paquetes.aereo = "JetSmart"

    console.log (`Paquete de viaje seleccionado con destino a ${paquetes.destino } con duración de ${paquetes.duracion } días. Tipo de alojamiento seleccionado ${paquetes.alojamiento } y vuelo con ${paquetes.aereo }. ` )


function ObjetoPaquete(destino, duracion, alojamiento, aereo) {
    this.destino = destino;
    this.duracion = duracion;
    this.alojamiento = alojamiento;
    this.aereo = aereo;

    this.resultado = function () { return "Tu viaje ideal: "; };

    this.getDestino = function () { return this.destino };
}

    var Paquete = new ObjetoPaquete ("Iguazú", "5 días", "posada", "JetSmart");

    console.log ( Paquete.resultado () );

    //console.log ( Paquete.getDestino () );


    // ARRAYS

    var destinosOpcion1 = ["Sierra de la Ventana", "Córdoba", "Iguazú"];

    destinosOpcion1[1];
    var destinoIguazu = "Iguazú";
    
    console.log(destinoIguazu.toUpperCase());
    

    var numeroElementos = destinosOpcion1.length;
    console.log(numeroElementos);


