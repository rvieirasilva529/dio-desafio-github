function somaDeGauss(numeroMaximo) {
    var arrayNumbers = [];
    for(var i = 1; i <= numeroMaximo; i++){
        arrayNumbers.push(i);
    } 
    const sumResult = arrayNumbers.reduce ((acc, atual) => (acc + atual), 0)
    return sumResult;
}