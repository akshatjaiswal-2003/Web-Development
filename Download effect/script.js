

var btn = document.querySelector('button')
var h1 = document.querySelector('h1')
var inner = document.querySelector('.inner')

btn.addEventListener('click', function(){
    btn.style.pointerEvents = 'none'
    var x = 50 + Math.floor(Math.random()*51)
    
    var a = 0;
    var int = setInterval(function(){
        a++
        h1.innerHTML = a+'%'
        inner.style.width = a+'%'


    },x)

    setTimeout(function(){
        clearInterval(int)
        btn.textContent = 'Downloaded'
        btn.style.opacity = 0.2;
        console.log("Downloaded in", x/10,"in second")
    },x*100)
})

