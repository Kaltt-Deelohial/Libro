const juegos = "";

fetch("https://drive.google.com/file/d/1wkUw2X7-w9EKB6WTPMm_F4gToAUQTsRi/view?usp=sharing")
.then(res => res.json())
.then(out => juegos = out);
document.getElementById("juego").innerHTML = juegos;