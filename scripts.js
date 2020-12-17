
// const inicio = document.querySelector('#inicio')
// const videos = document.querySelector('#videos')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function clickinicio() {
    inicio = document.querySelector('#inicio')
    videos = document.querySelector('#videos')
    login = document.querySelector('#login')
    create = document.querySelector('#create')
    
    videos.style = "display:none; transition:500ms";
    login.style = "display:none; transition:500ms";
    create.style = "display:none; transition:500ms";

    inicio.style = "display:flex; transition:500ms";
}

function clickvideos() {
    inicio = document.querySelector('#inicio')
    videos = document.querySelector('#videos')
    login = document.querySelector('#login')
    create = document.querySelector('#create')

    inicio.style = "display:none; transition:500ms";
    login.style = "display:none; transition:500ms";
    create.style = "display:none; transition:500ms";

    videos.style = "display:flex; transition:500ms";
}

function clickentrar() {
    inicio = document.querySelector('#inicio')
    videos = document.querySelector('#videos')
    login = document.querySelector('#login')
    create = document.querySelector('#create')

    inicio.style = "display:none; transition:500ms";
    videos.style = "display:none; transition:500ms";
    create.style = "display:none; transition:500ms";

    login.style = "display:flex; transition:500ms";
}

function clickcreate() {
    inicio = document.querySelector('#inicio')
    videos = document.querySelector('#videos')
    login = document.querySelector('#login')
    create = document.querySelector('#create')

    inicio.style = "display:none; transition:500ms";
    login.style = "display:none; transition:500ms";
    videos.style = "display:none; transition:500ms";

    create.style = "display:flex; transition:500ms";
}

async function clickbtnlogin() {
    await sleep(5000);
    alert("Usuário não encontrado");
}

// Não arrastar o logo (não funcionou)

// document.getElementById('#logo').ondragstart = function() { return false; };