var btn = document.querySelector('button');
var main = document.querySelector('main');
var arr = ["Hello", "My", "Akshat", "Khushi", "Nancy", "Papa", "Buddy", "Kanha", "Family"]
btn.addEventListener('click', function(){
    var h1 = document.createElement('h1');
    var num = Math.floor(Math.random()*arr.length)
    h1.textContent = arr[num];
    var top = Math.random()*95;
    var left = Math.random()*95
    h1.style.position = 'absolute'
    var c1 = Math.floor(Math.random()*256)
    var c2 = Math.floor(Math.random()*256)
    var c3 = Math.floor(Math.random()*256)
    h1.style.color = `rgb(${c1},${c2},${c3})`
    h1.style.top = top+'%';
    h1.style.left = left+'%';
    main.appendChild(h1);
})