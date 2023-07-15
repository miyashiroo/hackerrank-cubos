let disparos = [0, 10, 50, 70, 80, 30]


function solucao(disparos) {
    //seu codigo aqui
    let contador = 0
    for (const disparo of disparos) {
        if (disparo >= 70) {
            contador++
        }

    }
    if (contador === 0) {
        console.log("ELIMINADO")
    } else {
        console.log(contador)
    }



}

solucao(disparos)