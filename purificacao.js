
let string = "*Canis %lupus )familiaris"


function solucao(stringCorrompida) {
    let purificada = ""
    let caracteres = ["!", "@", "#", "$", "%", "&", "*", "(", ")"]

    for (const letras of stringCorrompida) {
        if (!caracteres.includes(letras)) {
            purificada += letras
        }
    }



    console.log(purificada)







}

solucao(string)