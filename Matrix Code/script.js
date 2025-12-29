var para = document.querySelector('p')
var text = para.innerText
var charecters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
var iteration = 0
var interval = null

function randomText(){
    var str = text.split('').map(function(char,index){
        if(iteration > index) return char
        return charecters.split('')[Math.floor(Math.random()*52)]
    }).join('')
    para.innerText = str
    iteration += 0.3

    if(iteration > text.length){
        clearInterval(interval)
        interval = null
    }
}

para.addEventListener('mouseenter', ()=>{
    iteration = 0
    clearInterval(interval)
    interval = setInterval(randomText,30)
})

