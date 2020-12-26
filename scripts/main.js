console.log('working')

var modal = document.querySelector('.asidebar');
var modalOpener = document.querySelector('.header-buttons__button');
var overlay = document.querySelector('.overlay');
var labelFocus = document.querySelector('.asidebar-lable')

modalOpener.addEventListener('click', function (e) {
  modal.classList.add('active');
  overlay.classList.add('active')
});

overlay.addEventListener('click', function (e) {
  modal.classList.remove('active');
  overlay.classList.remove('active')
})

$('.responsive').slick({
  dots: true,
  infinite: true,
  prevArrow: $('.inf-prev'),
  nextArrow: $('.inf-next'),
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("activ")
})

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("activ");
  })
})

var overle = document.querySelector('.overle')
var openButton = document.querySelector ('#burger');
var burgermenu = document.querySelector('#burger-menu')
openButton. addEventListener ("click" , function (){
    burgermenu.classList.toggle('active');
    this.classList.toggle('opened-burger');
overle.classList.toggle('active')
}) ;