console.log('Loaded!');
console.log('polo');
var element = document.getElementById('box');

var element1 = document.getElementById('enter').addEventListener('click', function(){
    document.getElementById('maintext').innerHTML = element.innerHTML;
})


