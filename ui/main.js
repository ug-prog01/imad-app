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
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        }
    };
    
    request.open('GET', 'http://ug19991.imad.hasura-app.io/counter', true);
    request.send(null);
    
    
};
