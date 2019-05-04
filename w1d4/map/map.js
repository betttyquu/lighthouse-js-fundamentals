
var words = ["ground", "control", "to", "major", "tom"];
function map(arr, func){
  newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr[i] = func(arr[i]); 
  }
  return newArr;             
}


console.log(map(words, function(word) {     
  return word.length;
}));              

console.log(map(words, function(word) {
  return word.toUpperCase();
}));

console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}));