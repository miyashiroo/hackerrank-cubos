let resultados = [
    "V",
    "E",
    "V",
    "E"
]
function solucao(resultados) {
    //seu codigo aqui
    let pontuacao = 0

    for (const resultado of resultados) {
        if (resultado == "V") {
            pontuacao += 3
        } else if (resultado == "E") {
            pontuacao += 1
        }
    }

    console.log(pontuacao)

}

solucao(resultados)