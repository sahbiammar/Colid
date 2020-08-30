// Select element function

$(document).ready(function(){  

    AOS.init({
        easing: 'ease',
        duration: 1800,      
        once: true              
    })

    $('nav a[href*="#"]').on('click', function() {                 
        $('html, body').animate({                              
            scrollTop: $($(this).attr('href')).offset().top - 100        
        }, 2000);                                                       
    });

    $('.wrapper-menu').on('click', function(){
        $('.wrapper-menu').toggleClass('open'); 
        $('.nav-list').toggleClass('open'); 
    });
 
    $('.nav-list ul li').on('click', function(){
        $('.wrapper-menu').toggleClass('open'); 
        $('.nav-list').toggleClass('open');
    });

    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 100) {
            $('nav').css("background-color", "#138fc2");
        } else {
            $('nav').css("background-color", "transparent");
        }
    });

    var activeDiv = 1;
    showDiv(activeDiv); // show first one because all are hidden by default
    var timer = setInterval(changeDiv, 2000);

    function changeDiv() {
        activeDiv++;
        if (activeDiv == 4) {
            activeDiv = 1;
        }
        showDiv(activeDiv);
    }

    function showDiv(num) {
        $('.display-header').hide(); // hide all 
        $('#div' + num).fadeIn(); // show active   
    }  

    $(".set > a").on("click", function() {
        event.preventDefault();
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
            .siblings(".content")
            .slideUp(600);
            $(".set > a i")
            .removeClass("fa-minus")
            .addClass("fa-plus");
        } else {
            $(".set > a i")
            .removeClass("fa-minus")
            .addClass("fa-plus");
            $(this)
            .find("i")
            .removeClass("fa-plus")
            .addClass("fa-minus");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(600);
            $(this)
            .siblings(".content")
            .slideDown(600);
        }
    });
 
});


