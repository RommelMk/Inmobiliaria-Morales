const solicitarDatos = (mensaje) => {
    let numero = parseInt(prompt(mensaje));
    return numero;
}

const calcularInteres = (cuotas) => {
    let interes = 0;
    const arrayCuotas = [
        {cuota: 1, interes: 0},
        {cuota: 3, interes: 0},
        {cuota: 6, interes: 5},
        {cuota: 12, interes: 10},
        {cuota: 18, interes: 15},
    ];
    switch (cuotas) {
        case (arrayCuotas[0].cuota):
        case (arrayCuotas[1].cuota):
            break;
        case (arrayCuotas[2].cuota):
            interes = arrayCuotas[2].interes;
            break;
        case (arrayCuotas[3].cuota):
            interes = arrayCuotas[3].interes;
            break;
        case (arrayCuotas[4].cuota):
            interes = arrayCuotas[4].interes;
            break;
        default: 
            alert("seleccione una cuota correspondiente")
    }
    return interes;
}

const calcularCuotas = (comision1,cuota1,interes1) => {
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



