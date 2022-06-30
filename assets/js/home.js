$(document).ready(function () {

//__________event element_______//
    $('.modalLoginBoxFieldInput').keydown(function (e) { 
        console.log('danh');
        if($(this).val().length >= 0) {
            $(this).next().addClass('changeLabel');
        }
        if(e.which == 8) {
            if($(this).val().length <= 1) {
            $(this).next().removeClass('changeLabel');
            }
        }
    });

    //click change color tab of Modal
    $('.modalLoginTab').click(function (e) { 
        e.preventDefault();
        $('.modalLoginTab').removeClass('active');
        $(this).addClass('active'); 
    });

    //click change Modal login and signUp 
    $('#signUp').slideUp(0);
    function showSignUp() {
        $('#signUp').slideDown(0);
        $('#signUp').addClass('showModal');
        $('#login').removeClass('showModal');
        $('#login').slideUp(0);
        $('#signUp').find('.inputFocus').focus();  
    }

    $('.tabsignUp').click(()=> { showSignUp();});

    function showLogin() {
        $('#login').slideDown(1);
        $('#login').addClass('showModal');
        $('#signUp').removeClass('showModal');
        $('#signUp').slideUp(0);
        $('#login').find('.inputFocus').focus();  
    }
    $('.tabLogin').click(function (e) { 
        e.preventDefault();
        showLogin();
    });

    //click change iconbar -> iconclose
    function changeIconBar() {
        $('.iconBarItem:nth-child(1)').toggleClass('rotateBarItem1');
        $('.iconBarItem:nth-child(2)').toggleClass('opacityBarItem');
        $('.iconBarItem:nth-child(3)').toggleClass('rotateBarItem2');
    }
    $('.iconBar').click(()=> {changeIconBar();});

    //click show menu 
    function showMenu() {
        $('.box').toggleClass('menuLeftToRight');
        $('.headerBottomOverlay').toggleClass('overLayRightToLeft');
        $('body').toggleClass('turnScrollBody');
    }
    $('.iconBar').click(()=> { showMenu();});

    //click close menu 
    function closeMenu() {
        $('.box').removeClass('menuLeftToRight');
        $('.headerBottomOverlay').removeClass('overLayRightToLeft');
        $('body').removeClass('turnScrollBody');
    }

    $('.headerBottomOverlay').click(()=>{closeMenu(); changeIconBar();});

    //click show modal form search 
    function showModalSearch () {
        $('.modalSearchForm').addClass('totterFormSearch');
    }
    $('.headerTopBtnSearch').click(()=> { showModalSearch() });


    //click tab service

    $('.serviceTab').click(function (e) { 
        e.preventDefault();
        //change tab
        $('.serviceTab').removeClass('serviceTabActive');
        $(this).addClass('serviceTabActive');
        $('.serviceContent').removeClass('serviceContentActive');
        let idTab = "." + $(this).attr('id');
        $(idTab).addClass('serviceContentActive');
    });

    $('.headerBottoMenuItemBtn').click(function() {
        let menuDrop = $(this).next();
        menuDrop.slideToggle();
        menuDrop.toggleClass('showMenuDrop');
        $(this).toggleClass('rotateBtn');
    })

    $('.btnScrollTop').click(()=> {
        $('html,body').animate({scrollTop: 0}, 1000);
    })

    $('.serviceBtn').click(function (e) { 
        e.preventDefault();
        $('.serviceVideo').addClass('showVideo');
        $('body').addClass('turnScrollBody');
        $('.serviceOverlay').addClass('showOverlay');
    });

    $('.serviceOverlayIcon').click(function (e) { 
        e.preventDefault();

        var video = $(".serviceVideo").attr("src");
        $(".serviceVideo").attr("src",video);
        $('.serviceVideo').removeClass('showVideo');
        $('.serviceOverlay').removeClass('showOverlay');
        $('body').removeClass('turnScrollBody');
    });

    

//___________end click________//


//_________slide slick___________//

$('.bannerSlideMain').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="btnBannerSlideMain left"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="btnBannerSlideMain right"><i class="fas fa-chevron-right"></i></button>',
});

$('.lastNewSlide').slick( {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    prevArrow: '<button type="button" class="btnLastNewSlide left"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="btnLastNewSlide right"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },

        {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
        },

        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
    ]
})


$('.testimonialSlide').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="btntestimonialSlide left"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="btntestimonialSlide right"><i class="fas fa-chevron-right"></i></button>',

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
    ]
});



//___________end slide slick_____//


//_______event window_________//

    function underLineTitle () {
        let indexAbout = $('.about').offset().top - 400;
        let indexService = $('.service').offset().top - 400;
        let indexNews = $('.lastNew').offset().top - 400;
        let indexTesti = $('.testimonial').offset().top - 400;

        if( $(window).scrollTop() > indexAbout) {
            $('.aboutTitle').addClass('scaleAfter');
        }
        else {
            $('.aboutTitle').removeClass('scaleAfter');
        }

        if( $(window).scrollTop() > indexService) {
            $('.serviceTitle').addClass('scaleAfter');
        }

        else {
            $('.serviceTitle').removeClass('scaleAfter');
        }

        if($(window).scrollTop() > indexNews) {
            $('.lastNewTitle').addClass('scaleAfter');
        }
        else {
            $('.lastNewTitle').removeClass('scaleAfter');
        }

        if($(window).scrollTop() > indexTesti) {
            $('.testimonialTitle').addClass('scaleAfter');
        }
        else {
            $('.testimonialTitle').removeClass('scaleAfter');
        }

        
    }

    function showAboutRight() {
        let indexAbout = $('.about').offset().top - 400;

        if( $(window).scrollTop() > indexAbout) {
            $('.aboutRight').addClass('showAboutRight');
        }
        else {
            $('.aboutRight').removeClass('showAboutRight');
        }
    }

    function fixedMenu () {
        if($(window).scrollTop() > 50) {
           if( $(window).width() > 991) {
            $('.headerBottom').addClass('menuFixed');
            $('.header').addClass('chnageHeader');
           }
        }
        else  {
            $('.headerBottom').removeClass('menuFixed');
            $('.header').removeClass('chnageHeader');
        }
    }

    // show btn scroll top

    function showBtnScroll () {
        if($(window).scrollTop() > 50) {
            $('.btnScrollTop').addClass('showScrollBtn');
        }
        else {
            $('.btnScrollTop').removeClass('showScrollBtn');
        }
    }
    $(window).scroll(function () { 
        underLineTitle();
        showAboutRight();
        fixedMenu ();
        showBtnScroll();
    });
//_______end event window_______//
});