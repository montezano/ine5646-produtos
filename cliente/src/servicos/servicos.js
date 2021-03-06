const servicos = {
  autentica: (usuario) => {
      console.log(usuario)
     return fetch(`/autenticado?user=${usuario.usuario}`)
          .then(r => analisaStatusCode(r))
          .then(r => r.json())
  }
  ,
  desconecta: () =>
    fetch('/desconecta')
      .then(r => analisaStatusCode(r))
      .then(r => Promise.resolve(true))
  ,
  cadastre: (dados) => {
    return fetch(`/salva?user=${dados.vendedor}`, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(dados)
      }).then(r => analisaStatusCode(r))
        .then(r => r.json())
  }
  ,
    remove: (dados) => {
        return fetch(`/apagaPorId?id=${dados.id}`)
            .then(r => analisaStatusCode(r))
            .then(r => r.json())
    }
    ,
  pesquiseTodos: () => {
    return fetch('/pesquisaTodos')
      .then(r => analisaStatusCode(r))
      .then(r => r.json())
  }
  ,
  pesquisePorId: (id) => {
    return fetch(`/pesquisaPorId?id=${id}`)
      .then(r => analisaStatusCode(r))
      .then(r => r.json())
  }
  ,
  pesquisePorTitulo: (nome) => {
    return fetch(`/pesquisaPorNome?nome=${nome}`)
      .then(r => analisaStatusCode(r))
      .then(r => r.json())
  }
}

function analisaStatusCode(resposta) {
  if (resposta.status === 200)
    return Promise.resolve(resposta)
  else
    return Promise.reject(false)
}

export default servicos
