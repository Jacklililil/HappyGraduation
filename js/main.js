(function () {
    $(window).scroll(function () { 
        var Num = $(window).scrollTop() / 500;
        var Num2 = $(window).scrollTop() * .0004; // higher number for more zoom
        var Num2mod = Num2 + 1;
        var Num3 = $(window).scrollTop() * .2; // Title speed
        var Num3mod = Num3 + 1;
        return $('.shade').css('opacity', Num),
        $(".bg").css({"transform":"scale(" + Num2mod + ")"}),
        $(".text").css({"margin-top":"-" + Num3mod + "px"});
    });
}.call(this));



