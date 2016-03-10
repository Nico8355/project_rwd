/** Jeg har forsøgt at lave en animation af menuikonet, men er ikke nået helt i mål med stylingen */

$(document).ready(function(){
    $("#navtoggle").click(function(){
        $(this).toggleClass('open');
    });
});

/** Åben/luk mobilmenu */

$(document).ready(function(){
    $("#navtoggle").click(function(){
        $("#mob-nav").slideToggle(200);
    });
});