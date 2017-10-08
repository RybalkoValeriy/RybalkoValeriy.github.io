
$(window).scroll(function () {
    var wparServ = $('.wrap-services');

    var windowHeigh = $(window).innerHeight();
    var scrollHeight = $(window).scrollTop();
    var elemTop = wparServ.offset().top;
    var elemHeight = wparServ.height();

    if (scrollHeight >= (elemTop - elemHeight)) {
        $('#itm-1-img').css('animation', 'itmAnimateBottomLeft 0.8s ease-in');
        $('#itm-1-content').css('animation', 'itmAnimateLeft 0.8s ease-in');

        $('#itm-2-img').css('animation', 'itmAnimateCenterTop 0.8s ease-in');
        $('#itm-2-content').css('animation', 'itmAnimateCenterBottom 0.8s ease-in');

        $('#itm-3-img').css('animation', 'itmAnimateBottomRight 0.8s ease-in');
        $('#itm-3-content').css('animation', 'itmAnimateRight 0.8s ease-in');

    }

    var wrapMenu = $('.wrap-menu');
    var menuTop = wrapMenu.offset().top;
    var menuHeight = wrapMenu.height();

    var Lcontent1 = $('#l-content-1');
    var Limg1 = $('#l-img-1');

    var Lcontent2 = $('#l-content-2');
    var Limg2 = $('#l-img-2');

    var Lcontent3 = $('#l-content-3');
    var Limg3 = $('#l-img-3');


    var Rcontent1 = $('#r-content-1');
    var Rimg1 = $('#r-img-1');

    var Rcontent2 = $('#r-content-2');
    var Rimg2 = $('#r-img-2');

    var Rcontent3 = $('#r-content-3');
    var Rimg3 = $('#r-img-3');


    if (scrollHeight >= (menuTop - menuHeight+300)) {

        Lcontent1.css('animation', ' Left1 0.6s ease-in-out');
        Limg1.css('animation', ' Left1 0.4s ease-in-out');

        Lcontent2.css('animation', ' Left1 1s ease-in-out');
        Limg2.css('animation', ' Left1 0.8s ease-in-out');

        Lcontent3.css('animation', ' Left1 1.2s ease-in-out');
        Limg3.css('animation', ' Left1 1s ease-in-out');

        Rcontent1.css('animation', ' Right1 0.6s ease-in-out');
        Rimg1.css('animation', ' Right1 0.4s ease-in-out');

        Rcontent2.css('animation', ' Right1 1s ease-in-out');
        Rimg2.css('animation', ' Left1 0.8s ease-in-out');

        Rcontent3.css('animation', ' Right1 1.2s ease-in-out');
        Rimg3.css('animation', ' Left1 1s ease-in-out');
    }

});

