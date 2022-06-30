// O que são vetores e arrays
//como declarar um array
//let array = ["string", 1 , true, ["array1"], ["array2"], ["array3"], ["array4"] ];
//console.log(array[0]);

//forEach
//array.forEach(function(item, index){console.log(item, index)});

//array.push("novo item"); //aad item

//array.pop(); // remove item do final do array

//array.shift(); //remove item do inicio do array

//array.unshift("novo item no inicio"); // add item no inicio do array
//console.log(array);

//console.log(array.indexOf(true)); //retorna o indice de um valor

//array.splice(0, 3); // remove ou substitui itens
//console.log(array);

//let novoArray = array.slice(0, 3);
//console.log(novoArray);

// objetos
let object = {string: "string", number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: "objeto interno"}};

//console.log(object.objectInterno);

//var string  = object.string;
//console.log(string);

//var arrayInterno = object.array;
//console.log(arrayInterno);

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);