var count = 0;

var value = document.querySelector("#countValue");
var incre = document.querySelector("#incre");
var decre = document.querySelector("#decre");
var reset = document.querySelector("#reset");

incre.addEventListener("click", function(){
    value.textContent = ++count;
});

decre.addEventListener("click", function(){
    if(count > 0){       // remove this line if you want negative values
        value.textContent = --count;
    }
});

reset.addEventListener("click", function(){
    count = 0;
    value.textContent = count;
});
