let historicoSimulacoes = [];

// 1. Encontrando os elementos no HTML
const seletor = document.getElementById('cor');
const secao = document.getElementById('minhaSecao');

// 2. Adicionando um "ouvinte" para quando o select mudar
seletor.addEventListener('change', function() {
    
    // Pegamos o valor (em inglês) que está escondido no <option> selecionado
    let corEscolhida = seletor.value;
    
    // Injetamos essa cor diretamente no CSS da section
    secao.style.backgroundColor = corEscolhida;
    
});

function calcular(){

    // ITENS AVULSOS
    let qtdeArroz = Number(document.getElementById("qtdeArroz").value)
    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value)
    let qtdeOleo = Number(document.getElementById("qtdeOleo").value)
    let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value)

    let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 2) + (qtdeMacarrao * 4)

    // COR / META KIT
    let cor = document.getElementById("cor").value
    let metaKit

    

    //if (cor == "verde") metaKit = 61
    //else if (cor == "vermelho") metaKit = 32
    //else if (cor == "laranja") metaKit = 21
    //else if (cor == "amarelo") metaKit = 54
    //else if (cor == "cinza") metaKit = 51
    //else if (cor == "marrom") metaKit = 88
    //else if (cor == "preto") metaKit = 60
    //else if (cor == "roxo") metaKit = 42
    //else if (cor == "rosa") metaKit = 44

    switch (cor){
        case "green": 
        metaKit = 61
        break;

        case "red": 
        metaKit = 32
        break;

        case "orange": 
        metaKit = 21
        break;

        case "yellow": 
        metaKit = 54
        break;

        case "gray": 
        metaKit = 51
        break;

        case "brown": 
        metaKit = 88
        break;

        case "black": 
        metaKit = 60
        break;

        case "purple": 
        metaKit = 42
        break;

        case "pink": 
        metaKit = 44
        break;
    }

    // KITS
    let qtdeKits = Number(document.getElementById("qtdeKits").value)

    if (qtdeKits >= metaKit){
        pontos += 5000
        if (qtdeKits > metaKit){
            pontos += (qtdeKits - metaKit) * (5000 / metaKit)
        }
    } else {
        pontos += qtdeKits * (5000 / metaKit)
    }

    // SUPLEMENTO
    let metaSuplemento = (metaKit % 2 == 0) ? metaKit / 2 : (metaKit / 2) + 0.5

    let qtdeSuplemento = Number(document.getElementById("qtdeSuplemento").value)

    if (qtdeSuplemento >= metaSuplemento){
        pontos += 5000
        if (qtdeSuplemento > metaSuplemento){
            pontos += (qtdeSuplemento - metaSuplemento) * (5000 / metaSuplemento)
        }
    } else {
        pontos += qtdeSuplemento * (5000 / metaSuplemento)
    }

    // LEITE (usa mesma lógica do kit)
    let qtdeLeite = Number(document.getElementById("metaLeite").value)

    if (qtdeLeite >= metaKit){
        pontos += 5000
        if (qtdeLeite > metaKit){
            pontos += (qtdeLeite - metaKit) * (5000 / metaKit)
        }
    } else {
        pontos += qtdeLeite * (5000 / metaKit)
    }

    // SANGUE (usa lógica do suplemento)
    let qtdeSangue = Number(document.getElementById("metaSangue").value)

    if (qtdeSangue >= metaSuplemento){
        pontos += 5000
        if (qtdeSangue > metaSuplemento){
            pontos += (qtdeSangue - metaSuplemento) * (5000 / metaSuplemento)
        }
    } else {
        pontos += qtdeSangue * (5000 / metaSuplemento)
    }

    // RESULTADO
    document.getElementById("result").innerText = "Pontuação Total: " + pontos.toFixed(2) + " pontos"

    historicoSimulacoes.push(pontos);

            // 1. Criamos uma variável vazia para montar o texto da lista
        let textoHistorico = "";

        // 2. Criamos o nosso contador (i), que começa no índice 0 do vetor
        let i = 0;

        // 3. O laço de repetição
        do {
            textoHistorico = textoHistorico + "<li>Simulação " + (i + 1) + ": " + historicoSimulacoes[i].toFixed(2) + " pontos</li>";
            
            i++; 

        } while (i < historicoSimulacoes.length); // Verifica se ainda há itens no vetor

        // 4. Injetamos o texto completo lá no HTML que criamos no Passo 1
        document.getElementById("listaHistorico").innerHTML = textoHistorico;

}

