$(document).ready(function () {

    $(".bootstrap-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
        variableWidth: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    variableWidth: true,
                    dots: true,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    variableWidth: true,
                    dots: true,
                },
            },
        ],
    });


    $(".event-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
        variableWidth: true,
        centerMode: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    variableWidth: true,
                    dots: true,
                    centerMode: true,
                },
            },
        ],
    });
    $(".gallery-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
        variableWidth: true,
        cssEase: "linear",
        centerMode: true,
    });

    


        // $('.sec-menu .menu li').click(function(){
        //     var tab_id = $(this).attr('data-tab');
    
        //     $('.sec-menu .menu li').removeClass('current');
        //     $('.sec-menu .tab_content').removeClass('current');
    
        //     $(this).addClass('current');
        //     $("#"+tab_id).addClass('current');
        // });

        $(".sec-menu .menu li a").click(function() {
		
            // Active state for tabs
            $(".sec-menu .menu li a").removeClass("active");
            $(this).addClass("active");
            
            // Active state for Tabs Content
            $(".tab_content_container > .tab_content_active").removeClass("tab_content_active").fadeOut(200);
            $(this.rel).fadeIn(500).addClass("tab_content_active");
            
        });	
      
});