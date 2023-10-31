function CargaLista(lista) {
    for (let i = 0; i < 20; i++) {
        if (i == 0) {
            lista[i] = 3;
        } else {
            lista[i] = lista[i - 1] + 6;
        }
    }
    return lista;
}

function MostrarLista(lista) {
    alert("Elementos de la lista");
    lista.forEach(element => {
        alert(element);
    });
}

function buscarElemento(lista) {
    let buscar;
    let bandera;
    do {
        bandera = false;
        buscar = prompt("Ingrese un dato a buscar, el programa se detendrá si ingresa 0");
        if (buscar == 0) {
            alert("Saliendo del bucle");
        } else {
            for (let i = 0; i < lista.length; i++) {
                if (buscar == lista[i]) {
                    bandera = true;
                    alert(`El elemento ${buscar} EXISTE`);
                }
            }
        }
        if (bandera == false && buscar != 0) {
            alert(`El elemento ${buscar} NO EXISTE`);
        }
    } while (buscar != 0);
}

var lista = [];
CargaLista(lista);
MostrarLista(lista);
buscarElemento(lista);
alert(`Primer elemento: ${lista[0]}`);
alert(`Último elemenot ${lista[lista.length - 1]}`);