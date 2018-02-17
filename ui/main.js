console.log('Loaded!');
//console.log('polo');
//var element = document.getElementById('box');
//console.log(element.innerHTML);
//var element1 = document.getElementById('enter').addEventListener('click', function(){
//    document.getElementById('maintext').innerHTML = 'element.innerHTML';
//})

/*var img = document.getElementById('dino');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function() {
    var delay = setInterval(moveRight, 20)
}*/

var button = document.getElementById("clickme");
button.onclick = function() {
    
    
    counter = counter + 1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
}
