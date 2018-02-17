console.log('Loaded!');

var element = document.getElementById('box');

console.log(element);

var element1 = document.getElementById('enter').addEventListener('click', function(element){
    document.getElementById('maintext').innerHTML = this.element;
})


