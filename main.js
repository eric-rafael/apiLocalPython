function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false);
    request.send()
    return request.responseText
}

// Constroi a tabela
function criaLinha(usuario) {
    linha = document.createElement("tr"); // Cria linha  
    tdId = document.createElement("td"); // Cria coluna do id
    tdNome = document.createElement("td"); // Cria coluna do nome
    tdId.innerHTML = usuario.id;
    tdNome.innerHTML = usuario.email;

    linha.appendChild(tdId); 
    linha.appendChild(tdNome);

    return linha;

}

// Para cada usuario -->> criar uma linha -->> adicionar na tabela
function main() {
    let data = fazGet('http://127.0.0.1:8000/usuarios')
    let usuarios = JSON.parse(data);
    let tabela = document.getElementById('tabela');
    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

main()