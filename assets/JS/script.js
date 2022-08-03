//*Script de ejemplo base*//

function pintar(){
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = 'yellow'
}
ele = document.getElementById("ele1");
ele.addEventListener("click", pintar);

//*Script de ejemplo base modificado*//
    
elem = document.getElementById("ele2")        
elem.addEventListener("click", function() {                        
    elem.style.backgroundColor = 'yellow'
});

//*Script de ejemplo con color por defecto*//

function pintar(color = "green"){
    element = document.getElementById("ele3")
    element.style.backgroundColor = color
}

pintar()
element.addEventListener("click", function() {
    element.style.backgroundColor = 'yellow'
});