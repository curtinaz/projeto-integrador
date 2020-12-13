
const inicio = document.querySelector('#inicio')
const outro = document.querySelector('#outro')

function clickinicio() {
    inicio = document.querySelector('#inicio')
    outro = document.querySelector('#outro')
    outro.style = "display:none; transition:500ms";

    inicio.style = "display:flex; transition:500ms";

}

function clickoutro() {
    inicio = document.querySelector('#inicio')
    outro = document.querySelector('#outro')
    inicio.style = "display:none; transition:500ms";

    outro.addin()

}
