//jquery smooth scroll
$('.navbar a').on('click', function(e) {
    if(this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    };
}) 

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each element */
        $('.info').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){                
                $(this).animate({'opacity':'1'},500);
            }
        });     
    });    


    anime({
        targets: '.name path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: false
    });

    let sliderImages = $(".slide"),
    arrowLeft = $("#arrow-left"),
    arrowRight = $("#arrow-right"),
    current = 0;

    // Clear all images
    function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
    }

    // Init slider
    function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
    }

    // Show prev
    function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    // sliderImages.fadeOut();
    current--;
    }

    // Show next
    function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
    }

    // Left arrow click
    arrowLeft.on("click", function() {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
    });

    // Right arrow click
    arrowRight.on("click", function() {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
    });

    startSlide();

});