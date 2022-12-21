const removeFromArray = function(arr, ...arg) {

    const arrFilter = arr.filter(item => {
        for (const e of arg) {
            if (item === e) {
                return false
            }
        }
        return true
    })
    return arrFilter
};


// Do not edit below this line
module.exports = removeFromArray;
