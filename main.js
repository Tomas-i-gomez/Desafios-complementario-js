// Ventana emergente
function emergente () {
    window.open("popUp.html", "","width=500, height=100")
}

//Creamos de forma dinamica un parrafo
let parrafo = document.createElement("p")
parrafo.innerHTML = "<h3>Esta oración fue creada dinamicamente</h3>"

document.body.append(parrafo)


