produtos = [100, 500, 100, 200, 50]


function solucao(precos) {
    //seu codigo aqui
    let soma = 0
    let menor = precos[0]
    let contadorPromocao = 0
    for (const preco of precos) {
        soma += preco;
        contadorPromocao++
        if (preco < menor) {
            menor = preco;


        }

    }
    if (contadorPromocao >= 5) {
        console.log(soma - menor)
    } else {
        console.log(soma)
    }




}

solucao(produtos)