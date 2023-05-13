const palindromes = function (string) {
    const ArrayString= string
                        .toLowerCase()
                        .split("")
                        .filter(letra => /^[A-Za-z]+$/.test(letra))

    for (let index = 0; index < ArrayString.length; index++) {
        const letra = ArrayString[index];
        const letraInv = ArrayString[ArrayString.length - index - 1]
        if (letra != letraInv)return false 
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
