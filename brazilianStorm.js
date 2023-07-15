let notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100]

function solucao(notas) {
    //seu codigo aqui
    let maior = notas[0]
    let menor = notas[0]
    let soma = 0
    let media = 0

    for (const nota of notas) {
        if (nota > maior) {
            maior = nota;
        } else if (nota < menor) {
            menor = nota;
        }
        soma += nota


    }
    notas.length

    media = (soma - maior - menor) / (notas.length - 2)

    console.log(media)





}

solucao(notas)