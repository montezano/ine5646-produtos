

var state = {
    usuario: undefined
}

function logado() {
    const user = state.usuario;
    return user;
}

function autentique(atual) {
    console.log(state.usuario)
    state.usuario = atual;
}

function autenticado(){
    return state.usuario !== undefined;
}



export {
    autentique, autenticado, logado
}
