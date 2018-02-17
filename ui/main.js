console.log('Loaded!');
//console.log('polo');
//var element = document.getElementById('box');
//console.log(element.innerHTML);
//var element1 = document.getElementById('enter').addEventListener('click', function(){
//    document.getElementById('maintext').innerHTML = 'element.innerHTML';
//})

var img = document.getElementById('dino');

function moveRight () {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function() {
    var delay = setInterval(moveRight, 20)
}

