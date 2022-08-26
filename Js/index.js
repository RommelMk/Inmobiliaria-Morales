function solicitarDatos (mensaje) {
    let numero = parseInt(prompt(mensaje));
    return numero;
}

function calcularInteres (cuotas) {
    let interes = 0;
    switch (cuotas) {
        case (1):
        case (3):
            break;
        case (6):
            interes = 5;
            break;
        case (12):
            interes = 10;
            break;
        case (18):
            interes = 15;
            break;
        default: 
            alert("seleccione una cuota correspondiente")
    }
    return interes;
}

function calcularCuotas (comision1,cuota1,interes1) {
        let formula = (comision1+(comision1*(interes1/100)))/cuota1;
        return formula;
}

do {
    let comision = solicitarDatos ("Ingrese el total de la comision");
    let cuotas = solicitarDatos ("Seleccione el nr de cuotas 1-3-6-12-18");
    let interes = calcularInteres (cuotas);
    var calcular = true;
    if (cuotas !== 1 && cuotas !== 3 && cuotas !== 6 && cuotas !== 12 && cuotas !== 18){
        calcular = false;
    }
    if (calcular) {
        let formula = calcularCuotas (comision,cuotas,interes);
        alert (`Usted debe pagar durante ${cuotas} meses el total de = $${formula}`)
    }
} while (!calcular);



