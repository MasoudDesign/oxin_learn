
$( document ).ready(function() {
    $( "#search" ).focus(function() {
        $(".wrapper_search").css("box-shadow" , "none");
    });
    $( "#search" ).blur(function() {
        $(".wrapper_search").css("box-shadow" , "0px 0px 2px #ccc");
    });
    $(".menu_hamburger").click(function(){
        $(".display_in_md").slideToggle();
    });
    $(window).resize(function(){
        var width = $(window).width();
        if (width > 768){
            var display_in_md = $(".display_in_md");
            if (display_in_md.css("display") == "none"){
                display_in_md.css("display" , "block");
            }
        }
    });
    $(window).resize(function(){
        var width = $(window).width();
        if (width < 768){
            var display_in_md = $(".display_in_md");
            if (display_in_md.css("display") == "block"){
                display_in_md.css("display" , "none");
            }
        }
    });
});