console.log('Loaded!');
console.log('polo');
var element = document.getElementById('box');

console.log('element');

var element1 = document.getElementById('enter').addEventListener('click', function(element){
    document.getElementById('maintext').innerHTML = element;
})


