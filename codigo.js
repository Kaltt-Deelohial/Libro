const juegos = "";
fetch("https://github.com/Kaltt-Deelohial/Libro/blob/main/juegos.json")
  .then(res => res.json())
  .then(out => juegos = out);
  document.getElementById("juego").innerHTML = juegos;