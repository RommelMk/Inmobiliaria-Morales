/* Calculadora de cuotas */
// const arrayCuotas = [
//     {cuota: 1, interes: 0},
//     {cuota: 3, interes: 0},
//     {cuota: 6, interes: 5},
//     {cuota: 12, interes: 10},
//     {cuota: 18, interes: 15},
// ];

// fetch("js/arrayCuotas.json")
// .then(response => response.json())
// .then(data => {
//     localStorage.setItem('Interes de operacion', JSON.stringify(data));
// })

const bringData = async() => {
    const dataInput = await fetch("js/arrayCuotas.json");
    const dataFinal = await dataInput.json();
    localStorage.setItem('Interes de operacion', JSON.stringify(dataFinal));
}

bringData();

let data = document.getElementById("formCalculate")
data.addEventListener ("submit", (submitData) => {
    submitData.preventDefault();
    let printData = document.getElementById("printData");
    printData.innerHTML = "";
    const {value} = document.getElementById("comisionCalculate");
    const comisionInput = parseInt(value)
    const comisionTypeIsNumber = (typeof comisionInput === 'number' && !Number.isNaN (comisionInput)) ? (true) : (false);
    comisionTypeIsNumber ? calcularText(comisionInput) : errorText();
})

const errorText = () => {
    // let textComision = document.createElement("p");
    // textComision.innerHTML = "Introduzca un valor correspondiente a la comisión";
    // printData.append(textComision);
    Swal.fire({
        icon: 'error',
        text: 'Introduzca un valor correspondiente a la comisión',
    })
}

const calcularText = (comisionInput) => {
    const cuotaSelect = document.getElementById("cuotasSelect").value;
    const interesData = JSON.parse(localStorage.getItem('Interes de operacion'))
    const interes = interesData.find(interesTraer => {
        return interesTraer.cuota == cuotaSelect
    })
    const formula = calcularCuotas(comisionInput,parseInt(cuotaSelect),interes.interes);
    localStorage.setItem ('Historial de operaciones', formula);
    const result = localStorage.getItem('Historial de operaciones');
    const newResult = JSON.parse(result)
    // let texto = document.createElement("p");
    // texto.innerHTML =`Usted debe pagar durante ${cuotaSelect} meses el total de = $${newResult}`;
    // printData.append(texto); 
    Swal.fire({
        icon: 'info',
        text: `Usted debe pagar durante ${cuotaSelect} meses el total de = $${newResult.toFixed(2)}`,
    })
}

const calcularCuotas = (comision1,cuota1,interes1) => {
    const formula = (comision1+(comision1*(interes1/100)))/cuota1;
    return formula;
}
/* Sign up y Login */



/*let data = document.getElementById ("formCalculate")
data.addEventListener ("submit", (submitData) => {
    submitData.preventDefault();
    const comisionInput = document.getElementById("comisionCalculate").value;
    const cuotaSelect = document.getElementById("cuotasSelect").value;
    let formula = calcularCuotas(comisionInput,cuotaSelect,interes);
    console.log(formula)
})

const calcularInteres = (cuotaSelect) => {
    const arrayCuotas = [
        {cuota: 1, interes: 0},
        {cuota: 3, interes: 0},
        {cuota: 6, interes: 5},
        {cuota: 12, interes: 10},
        {cuota: 18, interes: 15},
    ];
    const interes = arrayCuotas.find(interesTraer => {
        return interesTraer.cuota == cuotaSelect
    })
        if (interes !== undefined) {
            return interes.interes;
        }else {
            let calculador = document.getElementById ("calculador");
            let texto = document.createElement ("p");
            texto.innerHTML = "Seleccione una cuota correspondiente";
            document.body.append(texto);
            calculador.append(texto);
            alert("seleccione una cuota correspondiente")
        }
}

const calcularCuotas = (comision1,cuota1,interes1) => {
        let formula = (comision1+(comision1*(interes1/100)))/cuota1;
        return formula;
}

let formula = calcularCuotas (comisionInput,cuotaSelect,interes);
let calculador = document.getElementById ("calculador");
let texto = document.createElement ("p");
texto.innerHTML = `Usted debe pagar durante ${cuotas} meses el total de = $${formula}`;
document.body.append(texto);
calculador.append(texto);


const solicitarDatos = (mensaje) => {
    let numero = parseInt(prompt(mensaje));
    return numero;
}

alert (`Usted debe pagar durante ${cuotas} meses el total de = $${formula}`)

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
        let calculador = document.getElementById ("calculador");
        let texto = document.createElement ("p");
        texto.innerHTML = `Usted debe pagar durante ${cuotas} meses el total de = $${formula}`;
        document.body.append(texto);
        calculador.append(texto);
        alert (`Usted debe pagar durante ${cuotas} meses el total de = $${formula}`)
    }
} while (!calcular);*/


