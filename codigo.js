let opciones = [];
async function Cargar() {
    let res = await fetch(
        "https://github.com/Kaltt-Deelohial/Libro/blob/main/juegos.json", 
        {mode: 'no-cors'});
    //opciones = await res.json("");
    console.log(opciones);
    document.getElementById("opciones").innerHTML = opciones;
}