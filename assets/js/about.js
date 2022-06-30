$(document).ready(function () {

    function underLineTitle () {
        let indexAbout = $('.about').offset().top - 400;

        if( $(window).scrollTop() > indexAbout) {
            $('.aboutTitle').addClass('scaleAfter');
        }
        else {
            $('.aboutTitle').removeClass('scaleAfter');
        }
    }

    $(window).scroll(function () { 
        underLineTitle();
    })
    
});