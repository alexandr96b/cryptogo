$(document).ready(function () {

// === Begin button ripple style === \\\
$(".ripple").on("click", function(event) {
    var _this = $(this),
        offset = $(this).offset(),
        positionX = (event.pageX - offset.left),
        positionY = (event.pageY - offset.top);
    _this.append("<span class='ripple-effect'>");
    _this.find(".ripple-effect").css({
        left: positionX,
        top: positionY
    }).animate({
        opacity: 0,
    }, 1500, function() {
        $(this).remove();
    });
});
// === End button ripple style === \\\

$('.menu-icon').click(function(){
    $('.b-header__right').toggleClass('active');
    $('body').toggleClass('pure-active');
    $('.menu-icon').toggleClass('active');
    $(document).on('click', function(event) {
        if (!$(event.target).closest(".b-header__right , .menu-icon").length) {
            $('.b-header__right').removeClass('active');
            $('body').removeClass('pure-active');
            $('.menu-icon').removeClass('active');
        }
        event.stopPropagation();
    });
});


var swiper = new Swiper('.b-portfolio__slider', {
    slidesPerView: 'auto',
    slidesToScroll: 1,
    loop: true,
    roundLengths: true,
    loopAdditionalSlides: 30,
    centeredSlides: true,
    navigation: {
        nextEl: ".b-portfolio__next",
        prevEl: ".b-portfolio__prev",
    },
  breakpoints: {
        379: {

        },
        640: {

        },
        768: {
            centeredSlides: true,
        },
        1365: {
            centeredSlides: false,
        },
    },
});



$(".modal-link").on("click", function() {
    $('.modal-overlay[data-modal-id="'+$(this).data('modal-id')+'"]').addClass("active");
});

$(".b-modal__static-close").on("click", function() {
    $(".modal-overlay").removeClass("active");
});

$(document).on("click", function(e) {
    if(!$(e.target).closest(".b-modal__content").length && !$(e.target).closest(".modal-link").length) {
        $(".modal-overlay").removeClass("active");
    }
});




    var scrolledpx = parseInt($(window).scrollTop());
    $(window).scroll( function (){

        scrolledpx = parseInt($(window).scrollTop());

        if(scrolledpx > 150){
            $('.b-header').addClass('header-fix');
        } else if(scrolledpx < 151){
            $('.b-header').removeClass('header-fix');
        }

    })

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});




var swiper = new Swiper('.b-impression__slider', {
  slidesPerView: 'auto',
  slidesToScroll: 1,
    spaceBetween: 5,
    freeMode: true,
    loop: true,
    speed: 5000,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    },
    breakpoints: {
        379: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 44,
        },
    },
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
    },
    on: {
        init() {
            this.el.addEventListener('mouseenter', () => {
                this.autoplay.stop();
            });

            this.el.addEventListener('mouseleave', () => {
                this.autoplay.start();
            });
        }
    },
});




    var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
        jsContents = document.querySelectorAll('.js-tab-content');
    jsTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', function() {
            var id = this.getAttribute('data-tab'),
                content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'),
                activeTrigger = document.querySelector('.js-tab-trigger.active'),
                activeContent = document.querySelector('.js-tab-content.active');

            activeTrigger.classList.remove('active'); // 1
            trigger.classList.add('active'); // 2

            activeContent.classList.remove('active'); // 3
            content.classList.add('active'); // 4
        });
    });


    if ($('#regForm').length) {
        $('#nextBtn').click(() => {
            $('html,body').animate({
                scrollTop: $('#regForm').offset().top - $('.b-header').height()
            });
        });
    }

});



