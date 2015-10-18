// LOADER
// makes sure the whole site is loaded
$(window).load(function() {

    "use strict";

    // will first fade out the loading animation
    $(".signal").fadeOut();
    // will fade out the whole DIV that covers the website.
    $(".preloader").fadeOut("slow");

});

