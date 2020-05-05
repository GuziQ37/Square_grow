const square = document.createElement('div');
document.body.appendChild(square);

let grow = true; // flaga

let size = 100;


square.style.width = size + "px";
square.style.height = size + "px";

window.addEventListener("scroll", function(){

    if(grow){ // true 
        size += 5;
        square.style.height = size + "px";
        square.style.width = size + "px";
    } else {
        size -= 5;
        square.style.height = size + "px";
        square.style.width = size + "px";
    }
    
    if(size >= window.innerWidth / 2){
        grow = false; // zamiennie grow = !grow
    } else if(size <= window.innerWidth / 8){
        grow = true; //grow = !grow
    }



})