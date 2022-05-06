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