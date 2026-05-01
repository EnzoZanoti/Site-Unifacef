
                function calcular(){
                    //recupera a quantidade de arroz

                    let qtdeArroz = Number(document.getElementById("qtdeArroz").value)
                    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value)
                    let qtdeOleo = Number(document.getElementById("qtdeOleo").value)
                    let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value)
                    let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 2) + (qtdeMacarrao * 4)

                    let cor = document.getElementById("cor").value
                    let metaKit

                    if (cor == "verde"){
                        metaKit = 61
                    } //SI e CC//
                    else if (cor == "vermelho"){
                        metaKit = 32
                    } //Administração//
                    else if (cor == "laranja"){
                        metaKit = 21
                    } //Letras//
                     else if (cor == "amarelo"){
                        metaKit = 54
                    } //Social//
                     else if (cor == "cinza"){
                        metaKit = 51
                    } //Psicologia//
                     else if (cor == "marron"){
                        metaKit = 88
                    } //Medicina//
                     else if (cor == "preto"){
                        metaKit = 60
                    } //Software//
                     else if (cor == "roxo"){
                        metaKit = 42
                    } //Engenharia//
                    else if (cor == "rosa"){
                        metaKit = 44
                    } //Contábeis//

                    let quantKit = Number(document.getElementById("quantKit").value)
                    if (quantKit >= metaKit) {
                        pontos = pontos + 5000
                        if (quantKit > metaKit) {
                            pontos = pontos + (quantKit - metaKit)*(5000/metaKit)
                        }
                    } else {
                        pontos = pontos + quantKit * (5000/metaKit)
                    }

                    let metaSuplemento
                    if (metaKit % 2 == 0) {
                        metaSuplemento = metaKit/2
                    } else {metaSuplemento = (metaKit / 2) + 0.5}

                    let quantSuplemento = Number(document.getElementById("quantSuplemento").value) 
                    if (quantSuplemento >= metaSuplemento) {
                        pontos = pontos + 5000
                        if (quantSuplemento > metaSuplemento){
                    pontos = pontos + (quantSuplemento - metaSuplemento) + (5000/metaSuplemento)
                        }
                       
                    } else {
                        pontos = pontos + quantSuplemento + (5000/metaSuplemento)
                    }

                    let metaLeite = Number(document.getElementById("metaLeite").value)
                    metaLeite = metaKit
                    let metaSangue = Number(document.getElementById("metaSangue").value)
                    metaSangue = metaSuplemento

                    document.getElementById("result").innerText = "Pontuação: " + pontos.toFixed(2)
                }