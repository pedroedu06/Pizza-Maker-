//atualizar o rank de pizza

let ranking = JSON.parse(localStorage.getItem("ranking")) || [];

function addScore() {
    let nickname = document.querySelector('#nickname').value.trim();
    let score = parseInt(document.querySelector('#score').value, 10);

    if (!nickname || isNaN(score)) {
        alert('nickname e score invalidos!');
        return;
    }

    ranking.push({nickname, score});

    ranking.sort((a, b) => b.score - a.score);

    localStorage.setItem("ranking", JSON.stringify(ranking));

    atualizarTabela();
}

function atualizarTabela() {
    let tabela = document.querySelector('#ranking');
    tabela.innerHTML = "";

    ranking.forEach((jogador, index) => {
        let linha = `<tr>
                        <td>${index + 1}º</td>
                        <td>${jogador.nickname}</td>
                        <td>${jogador.score}</td>
                    </tr>`;
        tabela.innerHTML += linha;
    });
}

function limparScore() {
    if (confirm("tem certeza que quer limpar a tabela?")) {
        ranking = [];
        localStorage.removeItem("ranking");
        atualizarTabela()
    }
}

atualizarTabela();