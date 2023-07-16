
let palpite = "a"
let palavra = "abelha"

function solucao(palpite, palavra) {
    // seu codigo aqui
    let acertos = 0
    for (const letra of palavra) {
        if (palpite == letra) {
            acertos++
        }

    }
    console.log(acertos)
}
solucao(palpite, palavra)