const sumAll = function(init, fin) {
    var sum = 0;
    for(let i = init ; i <= fin ; i++){
        sum += i;
        console.log(sum);
    }
    return sum;
}

module.exports = sumAll
