function combine(input1, input2) {
    var result;
    // add if it is numbers, combine if combination of strings
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combine('Fouche ', 'du Preez'));
console.log(combine(10, 5));
var p = {
    name: 'Fouche',
    age: 50
};
console.log(p);
