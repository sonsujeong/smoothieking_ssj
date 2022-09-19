$(function(){

    function modalOn(){
        $(".modal_back").addClass("back_on");
       // $("body").addClass("body_lock");   // body 胶农费救凳
    }
    function modalOff(){
        $(".modal_back").removeClass("back_on");
      //  $("body").removeClass("body_lock");   // body 胶农费救凳
    }
    $(".hm img").click(function(){
        modalOn();
    });
    $(".cross").click(function(){
        modalOff();
    });
    
});