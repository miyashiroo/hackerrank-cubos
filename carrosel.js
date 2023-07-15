let sequencia = ">>><>"


function solucao(sequencia) {
    //seu codigo aqui
    let numero = 0;
    for (const instrucao of sequencia) {
        if (instrucao == "<") {
            if (numero == 0) {
                numero = 6;
            } else {
                numero--;
            }
        } else if (instrucao == ">") {
            if (numero == 6) {
                numero = 0
            } else {
                numero++
            }
        }
    }
    console.log(numero)
}
solucao(sequencia)

