$(document).ready(function(){
    $('.stock-slider').slick({
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
});

$(document).ready(function(){
    $('.courses-cards').slick({
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
});

$(document).ready(function(){
    $('.certificates-list').slick({
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
});

$(document).ready(function(){
    $('.reviews-slider').slick({
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
});

$(document).ready(function(){
    $('.usefull-articles-slider').slick({
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
});


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