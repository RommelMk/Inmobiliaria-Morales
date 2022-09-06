const solicitarDatos = (mensaje) => {
    let numero = parseInt(prompt(mensaje));
    return numero;
}

const calcularInteres = (cuotas) => {
    const arrayCuotas = [
        {cuota: 1, interes: 0},
        {cuota: 3, interes: 0},
        {cuota: 6, interes: 5},
        {cuota: 12, interes: 10},
        {cuota: 18, interes: 15},
    ];
    const interes = arrayCuotas.find(interesTraer => {
        return interesTraer.cuota == cuotas
    })
        if (interes !== undefined) {
            return interes.interes;
        }else {
            alert("seleccione una cuota correspondiente")
        }
}

const calcularCuotas = (comision1,cuota1,interes1) => {
        let formula = (comision1+(comision1*(interes1/100)))/cuota1;
        return formula;
}

do {
    let comision = solicitarDatos("Ingrese el total de la comision");
    let cuotas = solicitarDatos("Seleccione el nr de cuotas 1-3-6-12-18");
    let interes = calcularInteres(cuotas);
    var calcular = true;
    if (interes === undefined){
        calcular = false;
    }
    if (calcular) {
        let formula = calcularCuotas (comision,cuotas,interes);
        alert (`Usted debe pagar durante ${cuotas} meses el total de = $${formula}`)
    }
} while (!calcular);



