let card = document.querySelector('.card');
let img = document.querySelector('.img');
let button_info = document.querySelector('.button_info');
console.log(card)
card.addEventListener('mouseenter', function(){
    img.classList.add('cover_img_animation');
    button_info.classList.add('button_info_animation');
    console.log('click su elemento')
  });
card.addEventListener('mouseleave', function(){
    img.classList.add('cover_img_animation');
    button_info.classList.add('button_info_animation_no');
    console.log('click su elemento')
}); 