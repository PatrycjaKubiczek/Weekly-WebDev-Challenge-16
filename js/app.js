$(document).ready(function () {

    $('.navbar-toggle').on('click', function () {
        $(".navbar-fixed-top").css("background-color", "rgba(102,169,0,0.5)");
    });

    $(window).scroll(function () { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
            $(".navbar-fixed-top").css("background-color", "rgba(102,169,0,0.5)"); // if yes, then change the color of class "navbar-fixed-top" 
        } else {
            $(".navbar-fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
        }
    });



$('#Carousel').carousel({
interval: 1000
});

});