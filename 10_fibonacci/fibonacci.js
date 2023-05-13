const fibonacci = function(fibo) {
    if (fibo < 0) {
        return "OOPS"
    } 
    let contador = 0
    let cont = 1
    const arrFib = []
    for (let index = 1; index <= fibo; index++) {
        cont += contador
        contador += cont
        arrFib.push(cont, contador)
        if (arrFib.length > fibo){
            return arrFib[fibo-1]
        }
    }
};

console.log(fibonacci(5))
// Do not edit below this line
module.exports = fibonacci;
