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

$('.b-lang span').click(function(){
    $('.b-lang ul').toggleClass('active');
    $('.b-lang span').toggleClass('active');
    $(document).on('click', function(event) {
        if (!$(event.target).closest(".b-lang ul , .b-lang span").length) {
            $('.b-lang ul').removeClass('active');
            $('.b-lang span').removeClass('active');
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

$("img.lazy").lazyload({
    effect : "fadeIn"
});

$(".modal-link").on("click", function() {
    $('.modal-overlay[data-modal-id="'+$(this).data('modal-id')+'"] , body').addClass("active");
});

$(".b-modal__close").on("click", function() {
    $(".modal-overlay , body").removeClass("active");
});

$(document).on("click", function(e) {
    if(!$(e.target).closest(".b-modal__content").length && !$(e.target).closest(".modal-link").length) {
        $(".modal-overlay , body").removeClass("active");
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

});



