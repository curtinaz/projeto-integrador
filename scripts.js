
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

// BOTÕES DE LOGIN E REGISTRO



async function clickbtnlogin() {
    login = document.querySelector('#li-username')
    password = document.querySelector('#li-password')
    await sleep(5000);

    if (login=="") {
        alert("O login não pode ficar em branco")
    }

    alert("Usuário não encontrado");
}

async function clickbtnsignup() {
    await sleep(5000);
    alert("Pedido de criação de conta enviado com sucesso!");
}