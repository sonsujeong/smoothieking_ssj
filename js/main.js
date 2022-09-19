$(function(){
    $(".hamburger").click(function(){
        $(".hammenu").animate({marginRight:"300px"},300);
      });


      $(".cross").click(function(){
        $(".hammenu").animate({marginRight:"0px"},300);
      });
    


      $("#topbtn").click(function(){
        $("html,body").animate({scrollTop:0},'slow');
        return false;
     });


    if ($("#banner_wrap").length > 0) {
        bxSlider = $("#slide_banner").bxSlider();
   }

   function bxInit() {
    winSize = $(window).width();
    let sizeID;
    if (winSize < 1200 && winSize >= 999) {
        sizeID = 3;
    }else if (winSize < 999 && winSize >= 640) {
        sizeID = 2;
    }else if (winSize < 640 && winSize >= 400) {
        sizeID = 1;
    }else if (winSize < 400) {
        sizeID = 1;
    }else {
        sizeID = 4;
    }
    bxSlider.reloadSlider({
        minSlides: sizeID,
        maxSlides: sizeID,
        moveSlides: sizeID,
        auto: true,
        slideWidth: 257,
        slideMargin: 5,
        pause: 3000,
        nextText: '',
        prevText: '',
        autoHover: true,
        autoStart: true,
        autoDelay: 750,
        pager: false
    });	
   }; 
   bxInit();
   $(window).on("resize",function () {
    bxSlider.stopAuto(true);
    bxInit();
    bxSlider.onSliderLoad(function () {
    this.autoDelay(750).autoStart(true);
    });
  });

  $("#prevBtn").on("click",function(){
    bxSlider.goToPrevSlide();  
    return false; 
   });
    
  $("#nextBtn").on("click",function(){
        bxSlider.goToNextSlide();  
       return false;
      });
	


});