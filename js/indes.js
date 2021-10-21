var key = true;
$(document).ready(function () {
    $(window).scroll();

    var aRef = document.querySelectorAll("#nav a");
    var titles = document.querySelectorAll(".figure-title");
    var nav = document.querySelector('.scrollmenu');
    var a = document.querySelector('.scrollmenu a');
    var buttonWarning = document.querySelector('.btn-warning');
    var buttonCheckout = document.querySelector('.sticky-cart-button');
    var buttonCheckout2 = document.querySelector('#checkout');
    var buttonExit = document.querySelector(".close");

    for (var i = 0; i < aRef.length; i++) {
        aRef[i].addEventListener("click", activeARef);
    }

    for (var i = 0; i < titles.length; i++) {

        if ($(titles[i + 1]).length) {
            if ($(titles[i]).offset().top - 80 <= $(window).scrollTop() && $(window).scrollTop() < $(titles[i + 1]).offset().top + -80) {
                $(aRef[i]).addClass('nav-item-active');
            }
        } else {
            if ($(titles[i]).offset().top - 80 <= $(window).scrollTop()) {
                $(aRef[i]).addClass('nav-item-active');
            }

        }
    }
    var formRef = document.querySelector(".noteringar");
    var input = document.getElementById("Noteringar");

    $(buttonCheckout).click(function () {
        if ($(formRef).css("display") == "block") {
            $(input).focus();
        } else {
            $("#overlay").fadeIn(500);
            $(buttonCheckout).fadeOut(500);
        }
    });

    $(buttonCheckout2).click(function () {
        if ($(formRef).css("display") == "block") {
            $(input).focus();
        } else {
            $("#overlay").fadeIn(500);
            $(buttonCheckout).fadeOut(500);
        }
    });


    $(buttonWarning).click(function () {
        $("#overlay").fadeOut();
        $(buttonCheckout).fadeIn(500);
    });

    $(buttonExit).click(function () {
        $("#overlay").fadeOut();
        $(buttonCheckout).fadeIn(500);
    });

});

$( window ).resize(function() {
    var header = document.getElementById("nav");
    var img = document.getElementsByTagName("img");
    var titles = document.querySelectorAll(".figure-title");
    var aRef = document.querySelectorAll("#nav a");
    var a = document.querySelector('.scrollmenu a');

    var bottom_of_window = $(img).scrollTop() + $(img).height() + 65;
    if ($(window).scrollTop() >= bottom_of_window) {
        $(header).addClass('sticky');
    } else {
        $(header).removeClass('sticky');
    }

    if ($(window).scrollTop() < $(titles[0]).offset().top - 90) {
        $(aRef[0]).removeClass('nav-item-active');
        if ($(window).width() < 375) {
            $(a).css('margin-left', 10 + '%');
        }
        if (375 <= $(window).width() && $(window).width() < 768) {
            $(a).css('margin-left', 10 + '%');
        }
        if (768 <= $(window).width()) {
            $(a).css('margin-left', 10 + '%');
        }
    }
    if ($(titles[0]).offset().top - 90 <= $(window).scrollTop() && $(window).scrollTop() < $(titles[1]).offset().top + -90) {
        $(aRef[0]).addClass('nav-item-active').siblings().removeClass('nav-item-active');
        if ($(window).width() < 375) {
            $(a).css('margin-left', 10 + '%');
        }
        if (375 <= $(window).width() && $(window).width() < 768) {
            $(a).css('margin-left', 10 + '%');
        }
        if (768 <= $(window).width() && $(window).width() < 1024) {
            $(a).css('margin-left', 10 + '%');
        }
        if (1024 <= $(window).width() && $(window).width() < 1366) {
            $(a).css('margin-left', 10 + '%');
        }
    }
    if ($(titles[1]).offset().top - 90 <= $(window).scrollTop() && $(window).scrollTop() < $(titles[2]).offset().top + -90) {
        $(aRef[1]).addClass('nav-item-active').siblings().removeClass('nav-item-active');
        if ($(window).width() < 375) {
            $(a).css('margin-left', 10 + '%');
        }
        if (375 <= $(window).width() && $(window).width() < 768) {
            $(a).css('margin-left', 10 + '%');
        }
        if (768 <= $(window).width() && $(window).width() < 1024) {
            $(a).css('margin-left', 10 + '%');
        }
        if (1024 <= $(window).width() && $(window).width() < 1366) {
            $(a).css('margin-left', 10 + '%');
        }
    }
    if ($(titles[2]).offset().top - 90 <= $(window).scrollTop() && $(window).scrollTop() < $(titles[3]).offset().top + -90) {
        $(aRef[2]).addClass('nav-item-active').siblings().removeClass('nav-item-active');
        if ($(window).width() < 375) {
            $(a).css('margin-left', 10 + '%');
        }
        if (375 <= $(window).width() && $(window).width() < 768) {
            $(a).css('margin-left', 10 + '%');
        }
        if (768 <= $(window).width() && $(window).width() < 1024) {
            $(a).css('margin-left', 10 + '%');
        }
        if (1024 <= $(window).width() && $(window).width() < 1366) {
            $(a).css('margin-left', 10 + '%');
        }
    }
    if ($(titles[3]).offset().top - 90 <= $(window).scrollTop() && $(window).scrollTop() < $(titles[4]).offset().top + -90) {
        $(aRef[3]).addClass('nav-item-active').siblings().removeClass('nav-item-active');
        if ($(window).width() < 375) {
            $(a).css('margin-left', 10 + '%');
        }
        if (375 <= $(window).width() && $(window).width() < 768) {
            $(a).css('margin-left',  10 + '%');
        }
        if (768 <= $(window).width() && $(window).width() < 1024) {
            $(a).css('margin-left', 10 + '%');
        }
        if (1024 <= $(window).width() && $(window).width() < 1366) {
            $(a).css('margin-left', 10 + '%');
        }
    }
    if ($(titles[4]).offset().top - 90 <= $(window).scrollTop()) {
        $(aRef[4]).addClass('nav-item-active').siblings().removeClass('nav-item-active');
        if ($(window).width() < 375) {
            $(a).css('margin-left', 10 + '%');
        }
        if (375 <= $(window).width() && $(window).width() < 768) {
            $(a).css('margin-left', 10 + '%');
        }
        if (768 <= $(window).width() && $(window).width() < 1024) {
            $(a).css('margin-left', 10 + '%');
        }
        if (1024 <= $(window).width() && $(window).width() < 1366) {
            $(a).css('margin-left', 10 + '%');
        }

    }
    
 
});

$(window).scroll(function () {
    var header = document.getElementById("nav");
    var img = document.getElementsByTagName("img");
    var titles = document.querySelectorAll(".figure-title");
    var aRef = document.querySelectorAll("#nav a");
    var a = document.querySelector('.scrollmenu a');

    var bottom_of_window = $(img).scrollTop() + $(img).height() + 65;
    if ($(window).scrollTop() >= bottom_of_window) {
        $(header).addClass('sticky');
    } else {
        $(header).removeClass('sticky');
    }

    if ($(window).scrollTop() < $(titles[0]).offset().top - 90) {
        $(aRef[0]).removeClass('nav-item-active');
        if ($(window).width() < 375) {
            $(a).css('margin-left', 0 + '%');
        }
        if (375 <= $(window).width() && $(window).width() < 768) {
            $(a).css('margin-left', 0 + '%');
        }
        if (768 <= $(window).width()) {
            $(a).css('margin-left', 10 + '%');
        }
    }
    if ($(titles[0]).offset().top - 90 <= $(window).scrollTop() && $(window).scrollTop() < $(titles[1]).offset().top + -90) {
        $(aRef[0]).addClass('nav-item-active').siblings().removeClass('nav-item-active');
        if ($(window).width() < 375) {
            $(a).css('margin-left', 0 + '%');
        }
        if (375 <= $(window).width() && $(window).width() < 768) {
            $(a).css('margin-left', 0 + '%');
        }
        if (768 <= $(window).width() && $(window).width() < 1024) {
            $(a).css('margin-left', 5 + '%');
        }
        if (1024 <= $(window).width() && $(window).width() < 1366) {
            $(a).css('margin-left', 10 + '%');
        }
    }
    if ($(titles[1]).offset().top - 90 <= $(window).scrollTop() && $(window).scrollTop() < $(titles[2]).offset().top + -90) {
        $(aRef[1]).addClass('nav-item-active').siblings().removeClass('nav-item-active');
        if ($(window).width() < 375) {
            $(a).css('margin-left', -40 + '%');
        }
        if (375 <= $(window).width() && $(window).width() < 768) {
            $(a).css('margin-left', -30 + '%');
        }
        if (768 <= $(window).width() && $(window).width() < 1024) {
            $(a).css('margin-left', 5 + '%');
        }
        if (1024 <= $(window).width() && $(window).width() < 1366) {
            $(a).css('margin-left', 10 + '%');
        }
    }
    if ($(titles[2]).offset().top - 90 <= $(window).scrollTop() && $(window).scrollTop() < $(titles[3]).offset().top + -90) {
        $(aRef[2]).addClass('nav-item-active').siblings().removeClass('nav-item-active');
        if ($(window).width() < 375) {
            $(a).css('margin-left', -105 + '%');
        }
        if (375 <= $(window).width() && $(window).width() < 768) {
            $(a).css('margin-left', -85 + '%');
        }
        if (768 <= $(window).width() && $(window).width() < 1024) {
            $(a).css('margin-left', -22 + '%');
        }
        if (1024 <= $(window).width() && $(window).width() < 1366) {
            $(a).css('margin-left', -30 + '%');
        }
    }
    if ($(titles[3]).offset().top - 90 <= $(window).scrollTop() && $(window).scrollTop() < $(titles[4]).offset().top + -90) {
        $(aRef[3]).addClass('nav-item-active').siblings().removeClass('nav-item-active');
        if ($(window).width() < 375) {
            $(a).css('margin-left', -155 + '%');
        }
        if (375 <= $(window).width() && $(window).width() < 768) {
            $(a).css('margin-left', -130 + '%');
        }
        if (768 <= $(window).width() && $(window).width() < 1024) {
            $(a).css('margin-left', -52 + '%');
        }
        if (1024 <= $(window).width() && $(window).width() < 1366) {
            $(a).css('margin-left', -40 + '%');
        }
    }
    if ($(titles[4]).offset().top - 90 <= $(window).scrollTop()) {
        $(aRef[4]).addClass('nav-item-active').siblings().removeClass('nav-item-active');
        if ($(window).width() < 375) {
            $(a).css('margin-left', -185 + '%');
        }
        if (375 <= $(window).width() && $(window).width() < 768) {
            $(a).css('margin-left', -140 + '%');
        }
        if (768 <= $(window).width() && $(window).width() < 1024) {
            $(a).css('margin-left', -40 + '%');
        }
        if (1024 <= $(window).width() && $(window).width() < 1366) {
            $(a).css('margin-left', 0 + '%');
        }

    }
    
});
function activeARef(Ev) {

    $(Ev.target).addClass('nav-item-active').siblings().removeClass('nav-item-active');
    var titles = document.querySelectorAll(".figure-title");
    for (var i = 0; i < titles.length; i++) {
        if ($(Ev.target).text() == $(titles[i]).text()) {
            $('html,body').animate({
                scrollTop: ($(titles[i]).offset().top - 80)
            },
                600);
        }
    }

}



