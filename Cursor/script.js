var main = document.querySelector('#main')
var cursor = document.querySelector('#cursor')
main.addEventListener('mousemove',function(infom){
  cursor.style.left = infom.x + 'px'
  cursor.style.top = infom.y + 'px'
  
})