let precos2 = [5, 10, 3]
let precos = [30, 10, 54, 76, 1, 4, 35]

function solucao(precos) {
    // seu codigo aqui
    let perdaMinima = precos[0] - precos[1];


    for (let i = 0; i < precos.length; i++) {
        let numeroAnalisado = precos[i]

        for (let j = i + 1; j < precos.length; j++) {
            if (numeroAnalisado - precos[j] > 0) {
                if ((numeroAnalisado - precos[j]) < perdaMinima) {
                    perdaMinima = numeroAnalisado - precos[j]
                }

            }

        }


    }

    console.log(perdaMinima)
}
solucao(precos)