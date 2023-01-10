/* page refresh on orientation change === START */
$(window).on('orientationchange', function () 
{
    location.reload(true);
});
/* page refresh on orientation change === END */

/* show-hide video === start */
$(function($) 
{
    if($(window).width() > 1003)
    {
        $("#videopopup").show();
        $(".main").hide();
    }
    else 
    {
        $("#videopopup").hide();
        $(".main").show();
    }
});
/* show-hide  video === start */


$(window).on('load', function() 
{
    $("#pageloader").fadeOut(500); 
     setTimeout(function() { $("#videopopup").fadeOut(500); $(".main").show();}, 14000);
});
/* hide video === end */


 

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

/* slide selection onclick === start */
function navselection(val)
{
    $(".navslider .navslide").removeClass("active");
    $("#"+val).addClass("active");
}
/* slide selection onclick === end */

/* slide on click next === start */
$('.navslider').on('afterChange', function() { 
    var dataId = $('.slick-current').find(".navslide").attr("id");  
    console.log(dataId);
    $("#"+dataId).trigger("click");
});
/* slide on click next === start */

// social slider   === start 
$(function($) 
{
    if($(".navslider").length > 0)
    {
        $('.navslider').slick({
            slidesToShow:6,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 3000,
            infinite: false,
            adaptiveHeight: false,
            variableWidth: false,
            centerMode: false,
            centerPadding: '0',
            initialSlide:0,
            responsive:
            [ 
                {
                     breakpoint: 99999,
                     settings: "unslick"
                },
                {
                    breakpoint: 1003,
                    settings: { slidesToShow:5 }
                },
                {
                    breakpoint: 767,
                    settings: { slidesToShow:4 }
                },
                {
                    breakpoint: 599,
                    settings: {  slidesToShow:3 }
                },
                {
                    breakpoint: 479,
                    settings: { slidesToShow:2 }
                },
                {
                    breakpoint: 300,
                    settings: { slidesToShow:1  }
                }
            ]
        });
    }
});

 


 