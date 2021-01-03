function gerarNumeros(qnt) {
    var numeros = []
    for (var i=0; i<6; i++){
        var num = parseInt(Math.random() * (60 - 1)) + 1
        while (numeros.indexOf(num)!= -1){
            num = parseInt(Math.random() * (60 - 1)) + 1
        }
        numeros.push(num)
    }
    return numeros
}

console.log(gerarNumeros(6))