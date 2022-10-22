const propertyArray = [
    {id: 1, edificio: "Edificio: codigo I", direccion: "Dirección: Salta 1580", piso: "Piso: 1D", precio: "Precio: USD $180.000", distribucion: "Distribución: 4 ambientes", division: "División: 2 cuartos y 2 baños", imagen: "./Assets/Apartment-1.jpg"},
    {id: 2, edificio: "Edificio: codigo II", direccion: "Dirección: San Juan 2600", piso: "Piso: 4F", precio: "Precio: USD $350.000", distribucion: "Distribución: 6 ambientes", division: "División: 4 cuartos y 2 baños", imagen: "./Assets/Apartment-2.png" },
    {id: 3, edificio: "Edificio: codigo X", direccion: "Dirección: Rioja 1000", piso: "Piso: 2C", precio: "Precio: USD $110.000", distribucion: "Distribución: 1 ambiente", division: "División: 1 baño", imagen: "./Assets/Apartment-3.png"},
];

propertyArray.forEach(property => {
    let createImagen  = document.createElement("img");
    createImagen.src = property.imagen;
    createImagen.width = 400;
    createImagen.height = 280;
    let rentImage2 = document.getElementById("rentId");
    rentImage2.append(createImagen);
    let createButton = document.createElement("button");
    createButton.innerHTML = "Ver ficha";
    rentImage2.append(createButton);
    createButton.classList.add("buttonStyle")
    createButton.onclick = () => clickFicha(property.id);
});

const clickFicha = (fichaId) => {
   const property = propertyArray.find(valor => {
        return valor.id == fichaId
    })

    let text = document.getElementById(`ficha${fichaId}`);
    text.innerHTML = "";
    const propertyKeys = Object.keys(property);
    propertyKeys.forEach(key => {
        if (key !== "id" && key !== "imagen") {
            let fichaPropiedad = document.createElement("p");;
            fichaPropiedad.innerHTML = property[key];
            text.append(fichaPropiedad);
        }
    })
    
/*     let fichaPropiedad = document.createElement("p");
    fichaPropiedad.innerHTML = `${property.edificio}`;
    let text = document.getElementById("fichaUno");
    text.append(fichaPropiedad); */
}
