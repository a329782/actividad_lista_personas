let lista = document.getElementById("lista");
let nombres = ['Kobre Bryant', 'Michael Jordan','Lebron James'];

const mostrarNombre = () => nombres.map(valor => {
    let variableLi = document.createElement("li");
    variableLi.innerHTML = valor;
    lista.appendChild(variableLi);
});

const agregarNombre = () => {
    let nombre = document.getElementById("nombre");
    lista.innerHTML = "";
    nombres.push(nombre.value);
    mostrarNombre();
    nombre.value = "";
};

const limpiar = () => {
    lista.innerHTML = "";
    nombre.value = "";
}

mostrarNombre();