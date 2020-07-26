var images = document.querySelector('.image');
var image_hover = document.querySelector('.image_hover');
var burgermenu = document.querySelector('.burger_menu');
var headerburger = document.querySelector('.header_burger');


headerburger.addEventListener("click", function() {
    burgermenu.style.display = 'block'
})

burgermenu.addEventListener("click", function() {
    burgermenu.style.display = 'none'
});


// images.addEventListener("mouseover", function() {
//     image_hover.style.display = 'block'
// })