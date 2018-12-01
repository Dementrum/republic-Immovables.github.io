let firstSlick = document.querySelector('#slick-slide20'),
secondSlick = document.querySelector('#slick-slide21'),
threeSlick = document.querySelector('#slick-slide22'),
list = document.querySelectorAll('.nav-list-services__link');



document.body.addEventListener('click', (e) => {
    let target = e.target;
    
if(firstSlick.classList.contains('slick-active')) {

    list[0].classList.add('hidd');
    list[1].classList.remove('hidd')
    list[2].classList.remove('hidd')
}
if(secondSlick.classList.contains('slick-active')) {

    list[1].classList.add('hidd');
    list[2].classList.remove('hidd')
    list[0].classList.remove('hidd')
}
if(threeSlick.classList.contains('slick-active')) {

    list[2].classList.add('hidd');
    list[1].classList.remove('hidd')
    list[0].classList.remove('hidd')
}
})