
// const inicio = document.querySelector('#inicio')
// const videos = document.querySelector('#videos')

function clickinicio() {
    inicio = document.querySelector('#inicio')
    videos = document.querySelector('#videos')

    videos.style = "display:none; transition:500ms";

    inicio.style = "display:flex; transition:500ms";

}

function clickvideos() {
    inicio = document.querySelector('#inicio')
    videos = document.querySelector('#videos')

    inicio.style = "display:none; transition:500ms";

    videos.style = "display:flex; transition:500ms";

}

// Não arrastar o logo

document.getElementById('#logo').ondragstart = function() { return false; };