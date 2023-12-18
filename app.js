var image = document.querySelectorAll('.image img')
var boximg = document.querySelector('.photo img')
var box = document.querySelector('.box')
var green = document.querySelector('.green')
var red = document.querySelector('.red')
var yellow = document.querySelector('.yellow')
var curentindex = 0
function show()
{
    boximg.src = image[curentindex].src
    box.classList.add('show')
}
image.forEach(function(items, index){
    items.addEventListener('click', function(){
        curentindex=index
        show()
    })
})
green.addEventListener('click',function(){
        show()
        box.setAttribute('id', 'green1')
})
red.addEventListener('click',function(){
        show()
        box.setAttribute('id', 'red1')
})
yellow.addEventListener('click',function(){
        show()
        box.setAttribute('id', 'yellow1')
})