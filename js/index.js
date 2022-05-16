const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function(){
      navbar.classList.toggle('active', this.window.scrollY > 0);
});


window.addEventListener('load', function(){
     new Glinder(document.querySelector('.carousel__lista'), {
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: '.carouselIndicadores',
        arrows: {
          prev: '.carouselAnterior',
          next: '.carouselSiguiente'
        }
     });
});
let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
