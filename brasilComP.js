let primeiraLetra = "c"
let segundaLetra = "v"
let palavras = ["cvermelhor", "dale", "dole"]

function solucao(primeiraLetra, segundaLetra, palavras) {
    //seu codigo aqui
    let contador = 0

    for (const palavra of palavras) {
        let primeiraLetraDePalavra = palavra[0]
        if (primeiraLetraDePalavra == primeiraLetra) {
            let segundaLetraDePalavra = palavra[1]
            if (segundaLetraDePalavra == segundaLetra) {
                console.log(palavra)
                contador++;
            }
        }

    }
    if (contador === 0) {
        console.log("NENHUMA")
    }

}

solucao(primeiraLetra, segundaLetra, palavras)