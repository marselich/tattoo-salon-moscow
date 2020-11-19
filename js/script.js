let mySlider = (className) => {
    $(className).slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }); 
};


  $(document).ready(mySlider('.stock-slider'));
  $(document).ready(mySlider('.masters-cards'));
  $(document).ready(mySlider('.reviews-slider'));
  $(document).ready(mySlider('.usefull-articles-slider'));
  $(document).ready(mySlider('.courses-cards'));
  $(document).ready(mySlider('.services-certificates-list'));
  $(document).ready(mySlider('.services-reviews-slider'));





$(function() {
    var $speed = 200;
    var $class = 'opened';
    var $class_open = '.faq-item__answer';
  
    $(document).ready(function() {
      $('.faq-item').on('click', function() {
        $ul = $(this).closest('ul');
        $answer = $(this).closest('li').find($class_open);
  
        if (!$(this).closest('li').hasClass($class)) {
  
          $ul.find('li').each(function() {
            if ($(this).hasClass($class))
              $(this).removeClass($class).find($class_open).slideUp($speed);
          });
        }
  
        $answer
          .slideToggle($speed)
          .closest('li')
          .toggleClass($class);
      });
    });
  });


  //popup

  $(document).ready(function(){
      $('.consult-info__btn').click(() => {
        $('.main-popup').css('display', 'flex');
        $('body').toggleClass('lock');
      });


      $('.main-popup__close-btn').click(() => {
        $('.main-popup').css('display', 'none');
        $('body').toggleClass('lock');
      });
    
      $('.main-popup').click(() => {
        $('.main-popup').css('display', 'none');
        $('body').toggleClass('lock');
      });
});


//burger-menu


$(document).ready(function(){
    $('.header__burger').click(() => {
      $('.burger-menu').toggleClass('burger-menu_active');
    //  $('.header-nav').toggleClass('header-menu_active');
      $('.header__burger').toggleClass('header__burger_active');
    });
});

$(document).ready(function(){
  $('.second-header__burger').click(() => {
    $('.burger-menu').toggleClass('burger-menu_active');
  //  $('.second-header-nav').toggleClass('second-header-menu_active');
    $('.second-header__burger').toggleClass('second-header__burger_active');
  });
});