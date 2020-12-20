
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
    vid1 = document.querySelector('#vid1')
    
    videos.style = "display:none; transition:500ms";
    login.style = "display:none; transition:500ms";
    create.style = "display:none; transition:500ms";
    vid1.style = "display:none; transition:500ms";

    inicio.style = "display:flex; transition:500ms";
}

function clickvideos() {
    inicio = document.querySelector('#inicio')
    videos = document.querySelector('#videos')
    login = document.querySelector('#login')
    create = document.querySelector('#create')

    vid1 = document.querySelector('#vid1')
    vid2 = document.querySelector('#vid2')
    vid3 = document.querySelector('#vid3')
    vid4 = document.querySelector('#vid4')

    inicio.style = "display:none; transition:500ms";
    login.style = "display:none; transition:500ms";
    create.style = "display:none; transition:500ms";
    vid1.style = "display:none; transition:500ms";

    videos.style = "display:flex; transition:500ms";
}

function clickentrar() {
    inicio = document.querySelector('#inicio')
    videos = document.querySelector('#videos')
    login = document.querySelector('#login')
    create = document.querySelector('#create')

    vid1 = document.querySelector('#vid1')
    vid2 = document.querySelector('#vid2')
    vid3 = document.querySelector('#vid3')
    vid4 = document.querySelector('#vid4')

    inicio.style = "display:none; transition:500ms";
    videos.style = "display:none; transition:500ms";
    create.style = "display:none; transition:500ms";
    vid1.style = "display:none; transition:500ms";

    login.style = "display:flex; transition:500ms";
}

function clickcreate() {
    inicio = document.querySelector('#inicio')
    videos = document.querySelector('#videos')
    login = document.querySelector('#login')
    create = document.querySelector('#create')

    vid1 = document.querySelector('#vid1')
    vid2 = document.querySelector('#vid2')
    vid3 = document.querySelector('#vid3')
    vid4 = document.querySelector('#vid4')

    inicio.style = "display:none; transition:500ms";
    login.style = "display:none; transition:500ms";
    videos.style = "display:none; transition:500ms";
    vid1.style = "display:none; transition:500ms";

    create.style = "display:flex; transition:500ms";
}

// BOTÕES DE LOGIN E REGISTRO

async function clickbtnlogin() {
    login = document.querySelector('#li-username')
    password = document.querySelector('#li-password')
    await sleep(5000);

    if (login.value.length==0) {
        alert("O login não pode ficar em branco")
    } else if (password.value.length==0) {
        alert("A senha não pode ficar em branco")
    } else alert("Os dados informados são invalidos");
}

// Videos

function clickvid1() {
    inicio = document.querySelector('#inicio')
    videos = document.querySelector('#videos')
    login = document.querySelector('#login')
    create = document.querySelector('#create')

    vid1 = document.querySelector('#vid1')
    vid2 = document.querySelector('#vid2')
    vid3 = document.querySelector('#vid3')
    vid4 = document.querySelector('#vid4')

    inicio.style = "display:none; transition:500ms";
    videos.style = "display:none; transition:500ms";
    create.style = "display:none; transition:500ms";


    vid1.style = "display:flex; transition:500ms";
}

function clickvid2() {
    inicio = document.querySelector('#inicio')
    videos = document.querySelector('#videos')
    login = document.querySelector('#login')
    create = document.querySelector('#create')

    vid1 = document.querySelector('#vid1')
    vid2 = document.querySelector('#vid2')
    vid3 = document.querySelector('#vid3')
    vid4 = document.querySelector('#vid4')

    inicio.style = "display:none; transition:500ms";
    videos.style = "display:none; transition:500ms";
    create.style = "display:none; transition:500ms";


    vid1.style = "display:flex; transition:500ms";
}

function clickvid3() {
    inicio = document.querySelector('#inicio')
    videos = document.querySelector('#videos')
    login = document.querySelector('#login')
    create = document.querySelector('#create')

    vid1 = document.querySelector('#vid1')
    vid2 = document.querySelector('#vid2')
    vid3 = document.querySelector('#vid3')
    vid4 = document.querySelector('#vid4')

    inicio.style = "display:none; transition:500ms";
    videos.style = "display:none; transition:500ms";
    create.style = "display:none; transition:500ms";


    vid1.style = "display:flex; transition:500ms";
}

function clickvid4() {
    inicio = document.querySelector('#inicio')
    videos = document.querySelector('#videos')
    login = document.querySelector('#login')
    create = document.querySelector('#create')

    vid1 = document.querySelector('#vid1')
    vid2 = document.querySelector('#vid2')
    vid3 = document.querySelector('#vid3')
    vid4 = document.querySelector('#vid4')

    inicio.style = "display:none; transition:500ms";
    videos.style = "display:none; transition:500ms";
    create.style = "display:none; transition:500ms";


    vid1.style = "display:flex; transition:500ms";
}

async function clickbtnsignup() {
    login = document.querySelector('#su-username')
    password = document.querySelector('#su-password')
    mail = document.querySelector('#su-mail')
    let arroba = /[@]/g
    await sleep(5000);

    if (login.value.length==0) {
        alert("O login não pode ficar em branco")
    } else if (password.value.length==0) {
        alert("A senha não pode ficar em branco")
    } else if (mail.value.length==0) {
        alert("A email não pode ficar em branco")
    } else if (mail.value.search(arroba)<=0) {
        alert("O email deve conter um arroba (@)")
    } else alert("Pedido de criação de conta enviado com sucesso!");
}