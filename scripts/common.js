/* page refresh on orientation change === START */
$(window).on('orientationchange', function () 
{
    location.reload(true);
});
/* page refresh on orientation change === END */


/* onLoad === start */
$(window).on('load', function() 
{
     
});
/* onLoad === end */


 

/* show-hide caution === start */
function showhidecautionpopup(val)
{
     if(val == 'show')
     {
        $("#cautionpopup").fadeIn(500);
        $("body").css("overflow","hidden");
     }
     else if(val == 'hide')
     {
        $("#cautionpopup").fadeOut(500);
        $("body").css("overflow","auto");
     }
     else 
     {
        // nothing
     }
}
/* show-hide caution === end */


// social slider   === start 
$(function($) 
{
    if($(".itemslider").length > 0)
    {
        $('.itemslider').slick({
            slidesToShow:6,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 3000,
            infinite: false,
            adaptiveHeight: false,
            variableWidth: true,
            centerMode: false,
            centerPadding: '0',
            initialSlide:0,
            responsive:
            [
                /* 
                {
                     breakpoint: 99999,
                     settings: "unslick"
                },
                */
                {
                    breakpoint: 667,
                    settings: {  slidesToShow:5 }
                },
                {
                    breakpoint: 599,
                    settings: {  slidesToShow:4 }
                },
                {
                    breakpoint: 479,
                    settings: {  slidesToShow:3 }
                },
                {
                    breakpoint: 367,
                    settings: { slidesToShow:2  }
                }
            ]
        });
    }
});
