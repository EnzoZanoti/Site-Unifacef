
                function calcular(){
                    //recupera a quantidade de arroz

                    let qtdeArroz = Number(document.getElementById("qtdeArroz").value)
                    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value)
                    let qtdeOleo = Number(document.getElementById("qtdeOleo").value)
                    let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value)
                    let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 2) + (qtdeMacarrao * 4)

                    document.getElementById("result").innerText = "Pontuação: " + pontos
                }