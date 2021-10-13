$(document).ready(function () {
    // typing the string  
    var typed = new Typed(".typing", {
        strings: ["Dong Trieu"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // text galaxy
    var mouseX, mouseY;
    var ww = $(window).width();
    var wh = $(window).height();
    var traX, traY;
    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        traX = ((4 * mouseX) / 570) + 40;
        traY = ((4 * mouseY) / 570) + 50;
        console.log(traX);
        $(".title").css({ "background-position": traX + "%" + traY + "%" });
    });


    

});