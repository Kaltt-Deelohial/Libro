async function Cargar() {
    const url = "https://github.com/Kaltt-Deelohial/Libro/blob/main/juegos.json";
    let opciones;
    fetch(url, {mode: 'no-cors'})
        .then(res => opciones = res);

    if(opciones == null){
        console.log("ESTA MUERTO");
    }

    console.log(JSON.stringify(opciones));
    document.getElementById("opciones").innerHTML = opciones;
}

function TirarDados(){

}