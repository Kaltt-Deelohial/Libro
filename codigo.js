let opciones = [];
async function Cargar() {
    let res = await fetch(
        "https://github.com/Kaltt-Deelohial/Libro/blob/main/juegos.json", 
        {mode: 'no-cors'});
    let data = await res.json();
    console.log(data);
    document.getElementById("opciones").innerHTML = opciones;
}