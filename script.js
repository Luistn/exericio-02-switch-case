
function classificacaoPorIdade() {
    let qtde = parseInt(prompt("Quantas pessoas deseja cadastrar?"));
    let criancas = 0, adolescentes = 0, adultos = 0, idosos = 0;

    for (let i = 0; i < qtde; i++) {
        let idade = parseInt(prompt(`Idade da pessoa ${i + 1}:`));
        if (idade <= 12) criancas++;
        else if (idade <= 17) adolescentes++;
        else if (idade <= 59) adultos++;
        else idosos++;
    }

    alert(`Crianças: ${criancas}\nAdolescentes: ${adolescentes}\nAdultos: ${adultos}\nIdosos: ${idosos}`);
}

function controleEstoque() {
    let estoque = 100;
    let opcao;

    do {
        opcao = parseInt(prompt("1. Entrada\n2. Saída\n3. Ver estoque\n4. Sair"));
        switch (opcao) {
            case 1:
                estoque += parseInt(prompt("Quantidade a adicionar:"));
                break;
            case 2:
                let qntd = parseInt(prompt("Quantidade a remover:"));
                if (qntd <= estoque) estoque -= qntd;
                else alert("Estoque insuficiente!");
                break;
            case 3:
                alert("Estoque atual: " + estoque);
                break;
            case 4:
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida!");
        }
    } while (opcao !== 4);
}

function validarSenha() {
    const senhaCorreta = "senai123";
    let tentativas = 0;
    while (tentativas < 3) {
        let senha = prompt("Digite a senha:");
        if (senha === senhaCorreta) {
            alert("Bem-vindo!");
            return;
        } else {
            tentativas++;
            alert("Senha incorreta.");
        }
    }
    alert("Acesso bloqueado.");
}

function numerosPrimosIntervalo() {
    let inicio = parseInt(prompt("Número inicial:"));
    let fim = parseInt(prompt("Número final:"));

    let primos = [];

    for (let i = inicio; i <= fim; i++) {
        let primo = i > 1;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                primo = false;
                break;
            }
        }
        if (primo) primos.push(i);
    }

    alert("Números primos: " + primos.join(", "));
}

function simuladorFila() {
    let fila = [];
    let opcao;

    do {
        opcao = parseInt(prompt("1. Adicionar\n2. Atender\n3. Mostrar fila\n4. Sair"));
        switch (opcao) {
            case 1:
                fila.push(prompt("Nome da pessoa:"));
                break;
            case 2:
                if (fila.length > 0) alert(`${fila.shift()} foi atendido.`);
                else alert("Fila vazia.");
                break;
            case 3:
                alert("Fila: " + (fila.length > 0 ? fila.join(", ") : "Vazia"));
                break;
            case 4:
                alert("Encerrando...");
                break;
            default:
                alert("Opção inválida!");
        }
    } while (opcao !== 4);
}

function pesquisaSatisfacao() {
    let ruim = 0, regular = 0, otimo = 0;

    for (let i = 0; i < 10; i++) {
        let nota = parseInt(prompt(`Nota ${i + 1} (0 a 10):`));
        if (nota >= 0 && nota <= 4) ruim++;
        else if (nota <= 7) regular++;
        else if (nota <= 10) otimo++;
        else alert("Nota inválida.");
    }

    alert(`Ruim: ${ruim}\nRegular: ${regular}\nÓtimo: ${otimo}`);
}

function mediaAlunos() {
    for (let i = 0; i < 5; i++) {
        let nome = prompt(`Nome do aluno ${i + 1}:`);
        let soma = 0;

        for (let j = 0; j < 3; j++) {
            soma += parseFloat(prompt(`Nota ${j + 1} de ${nome}:`));
        }

        let media = soma / 3;
        let status = media >= 7 ? "Aprovado" : "Reprovado";
        alert(`${nome} - Média: ${media.toFixed(2)} - ${status}`);
    }
}

function analiseVendas() {
    let vendas = [100, 250, 300, 50, 400, 700, 150];
    let total = 0, acima300 = 0;

    for (let v of vendas) {
        total += v;
        if (v > 300) acima300++;
    }

    let media = total / vendas.length;

    alert(`Total: R$${total}\nMédia: R$${media.toFixed(2)}\nDias acima de R$300: ${acima300}`);
}

function verificarNumeroNaLista() {
    let lista = [4, 7, 9, 12, 23, 35, 42, 50, 61, 78];
    let numero = parseInt(prompt("Número para buscar:"));
    let encontrado = lista.includes(numero);

    alert(encontrado ? "Número encontrado." : "Número não está na lista.");
}

function caixaEletronico() {
    let valor = parseInt(prompt("Valor do saque (mínimo R$10):"));

    if (valor >= 10 && valor % 10 === 0) {
        let n100 = Math.floor(valor / 100); valor %= 100;
        let n50 = Math.floor(valor / 50); valor %= 50;
        let n20 = Math.floor(valor / 20); valor %= 20;
        let n10 = Math.floor(valor / 10);

        alert(`Notas entregues:\nR$100: ${n100}\nR$50: ${n50}\nR$20: ${n20}\nR$10: ${n10}`);
    } else {
        alert("Valor inválido.");
    }
}

