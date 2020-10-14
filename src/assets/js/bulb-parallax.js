var bulb = document.getElementsByClassName("main-bombilla");
document.onmousemove = function(){
    var x = event.clientX / window.innerWidth ;
    var y = event.clientY / window.innerHeight ;

 bulb[0].style.transform = "translateX(calc(10px * "+x+"))"

};

