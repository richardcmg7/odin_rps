const removeFromArray = function(array) {
    var newarray = array;

    for(let i = 1; i < arguments.length;  i++ )
    {
        newarray = newarray.filter(el => el !== arguments[i]);
    }
   
    return newarray;
}

module.exports = removeFromArray
