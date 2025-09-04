let listaAmigos = [];

function adicionarAmigo()
{
    let nomeDigitado = document.getElementById('amigo').value;

    if(nomeDigitado != "")
    {
        //console.log(listaAmigos);
        listaAmigos.push(nomeDigitado);
        LimparCampoNome();
        //arrayAmigos();
        tabelaAmigos();
    }
    else
    {
        alert("Digite um nome válido.");
        LimparCampoNome();
    }

}

function arrayAmigos()
{
    const listaHTML = document.getElementById('listaDeAmigos');
    listaHTML.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++)
    {
        const nome = listaAmigos[i];
        const li = document.createElement('li');
        li.textContent = nome; 
        listaHTML.appendChild(li);
    }
}
function tabelaAmigos()
{
    const tabela = document.getElementById('tabelaAmigos'); //pega a tabela do html
    const corpo = tabela.querySelector('tbody'); //pega o corpo da tabela (onde as linhas estão)
    corpo.innerHTML = ""; //limpa a tabela antes de recriar.

    for(let i = 0; i <listaAmigos.length; i++) //percorre cada amigo na lista se utilizando da posição i
    {
        const linha = document.createElement('tr'); //cria uma nova linha
        const nomeCell = document.createElement('td'); //cria uma célula com o nome do amigo
        nomeCell.textContent = listaAmigos[i]; //preenche a célula com o nome

        //evento disparado quando a célula é clicado, neste caso está mostrando um alerta.
        nomeCell.addEventListener('click', function () {
            alert(`amigo selecionado: ${nomeCell.textContent}`);
        });

        linha.appendChild(nomeCell); //adiciona a célula à linha
        corpo.appendChild(linha); //adiciona a linha ao corpo da tabela

    }
}
function sortearAmigo()
{
    if (listaAmigos.length != 0)
    {
        let numeroEscolhido = parseInt(Math.random() * listaAmigos.length);
        let nomeAmigoEscolhido = listaAmigos[numeroEscolhido];

        const campoResultado = document.getElementById('resultado');
        const li = document.createElement('li');
        li.textContent = nomeAmigoEscolhido
        campoResultado.appendChild(li);
        

    }
    else
    {
        alert("A Lista ainda está vazia");
    }
}

function LimparCampoNome()
{
    campoNome = document.getElementById('amigo');
    campoNome.value = "";
    campoNome.focus();
}

