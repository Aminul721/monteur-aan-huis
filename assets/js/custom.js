(function($){
	// banner top height js
    function addHeight() {
        let widthResize = $(window).width();
        let mainBanner = jQuery('.banner_wrap');
        let marqueeWrap = jQuery('.marQ_dskArea').height();
        let header_Height = jQuery('.fixed_header').height();
        let totalHeight = marqueeWrap + header_Height;
        if (widthResize > 1024 && widthResize < 1440) {
            mainBanner.css("margin-top", totalHeight)
        }else {
            mainBanner.css("margin-top", header_Height)
        }
    }
    addHeight();
    jQuery(window).resize(function() {
        addHeight();
    });

    jQuery('.common_btn').click(function () {
        var Lochref = jQuery(this).attr('href');
        jQuery("html, body").stop().animate({
        scrollTop: jQuery(Lochref).offset().top - header_Height
        }, 1500);
        return false;
    });

    if(matchMedia('only screen and (max-width: 767px)').matches) {
        var $mwo = $('.marquee-with-options');
        jQuery('.marquee').marquee();
        jQuery('.marquee-with-options').marquee({
            speed: 40,
            gap: 0,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true
        });

        //pause and resume links
        jQuery('.pause').click(function(e){
            e.preventDefault();
            $mwo.trigger('pause');
        });

        jQuery('.resume').click(function(e){
            e.preventDefault();
            $mwo.trigger('resume');
        });

        //toggle
        jQuery('.toggle').hover(function(e){
            $mwo.trigger('pause');
            },function(){
            $mwo.trigger('resume');
        })
        .click(function(e){
            e.preventDefault();
        })
    }


    jQuery( ".toggle_view_bg" ).click(function(e) {
        if(jQuery(this).parent('.toggle_view_item').hasClass('active')) {
        } else {
            $( ".toggle_view_bg" ).each(function() {
                if(jQuery(this).parent('.toggle_view_item').hasClass('active')) {
                    jQuery(this).parent('.toggle_view_item').toggleClass('active');
                    jQuery(this).next('.show_details').slideToggle('hide');
                }
            });
        }
        jQuery(this).parent('.toggle_view_item').toggleClass('active');
        jQuery(this).next('.show_details').slideToggle('slow');
        e.preventDefault();
    });
})(jQuery);

    


jQuery(document).ready(function(){
    if(matchMedia('only screen and (max-width: 766px)').matches) {
    	var total_items = jQuery(".featurelist_item").length;
    	var total_itemsMath = Math.ceil(total_items / 3);

    	var featurelist_carouselSlider = jQuery(".featurelist_carouselSlider");
    	featurelist_carouselSlider.owlCarousel({
    		loop:true,
    		margin:0,
    		items: 4,
    		nav:false,
    		dots:false,
    		slideBy: 1,
            rows: 2,
    		dotsEach: total_itemsMath,
    		responsiveClass:true,
    		stagePadding: 0,
    		responsive:{
    			0:{
    				items:1,
    				stagePadding: 0,
                    nav:true,
                    dots:true,
    			},
    			767:{
    				items:4,
                    nav:false,
                    dots:false,
                    rows: 2,
    			},
    		}
    	});
    }

    var total_items = jQuery(".customer_item").length;
    var total_itemsMath = Math.ceil(total_items / 3);
    var customer_carouselSlider = jQuery(".customer_carouselSlider");
    customer_carouselSlider.owlCarousel({
        loop:true,
        margin:0,
        items: 3,
        nav:true,
        dots:true,
        slideBy: 1,
        dotsEach: total_itemsMath,
        responsiveClass:true,
        stagePadding: 0,
        responsive:{
            0:{
                items:1,
            },
            767:{
                items:2,           
            },
            1024:{
                items:3,
            },
        }
    });
});


// scrolling event floating btn
jQuery(document).ready(function (){

    // couner js
    let number = document.getElementById("countdown");
    let counterDSK = 5;
    setInterval(() => {
        if(counterDSK == 0){
            clearInterval();
        }else{
            counterDSK -= 1;
            number.innerHTML = counterDSK;
        }
    }, 1000);


    jQuery('.header_container').addClass('allow_expand');
    jQuery(window).scroll(function(){
        var Header_innH = jQuery('.header_area').height();
        var First_offH = jQuery('.visible_itme1').offset().top;
        var Second_offH = jQuery('.visible_itme2').offset().top;

        var First_innerH = jQuery('.visible_itme1').height();
        var Second_innerH = jQuery('.visible_itme2').height();

        var scree_vh = jQuery(window).height();
        var scrollTop = jQuery(this).scrollTop();

        // offset top form scree height positiive
        var total_FoffstH_innH = First_offH + First_innerH;
        var total_SoffstH_innH = Second_offH + Second_innerH;

        // offset top form scree height nagetive
        var total_FoffH_SCNH = First_offH - scree_vh;
        var total_SoffH_SCNH = Second_offH - scree_vh;

        if (( scrollTop > total_FoffH_SCNH && scrollTop < total_FoffstH_innH )  || ( scrollTop > total_SoffH_SCNH && scrollTop < total_SoffstH_innH )) {
        	jQuery('.header_container').addClass('width_manage');
        }else {
        	jQuery('.header_container').removeClass('width_manage');
        }
    });

    jQuery(window).scroll(function(){
        var First_offH = jQuery('.visible_itme1').offset().top;
        var First_boxH = jQuery('.visible_itme1').height();
        var scrollTop = jQuery(this).scrollTop() - First_boxH;
        if (scrollTop > First_offH) {
            jQuery('.header_container').removeClass('allow_expand');
            jQuery('.header_container').addClass('width_less');
        }else {
            jQuery('.header_container').addClass('allow_expand');
            jQuery('.header_container').removeClass('width_less');
        }
    });
});
