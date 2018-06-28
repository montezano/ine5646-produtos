

var state = {
    usuario: undefined
}

function logado() {
    const user = state.usuario;
    return user;
}

function autentique(atual) {
    state.usuario = atual.nome;
}

function autenticado(){
    return state.usuario !== undefined;
}



export {
    autentique, autenticado, logado
}
