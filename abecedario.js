
let palavras = ["mamao",
    "maca",
    "melao",
    "melancia",
    "laranja"]
let letra = "m"
let perder = 0

function solucao(letra, palavras) {
    //seu codigo aqui
    for (let i = 0; i < palavras.length; i++) {
        if (!(palavras[i][0] == letra)) {
            perder++;
        }
    }

}
solucao(letra, palavras)
console.log(perder)