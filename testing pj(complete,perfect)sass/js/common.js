$(function(){
    $('.menu-trigger').on('click',function(){
      var rightVal = 0;
      if($(this).hasClass('active')){
        rightVal = -767;
        $(this).removeClass('active');
      }else{
        $(this).addClass('active');
      }
  
      $('.nav').stop().animate({
        right: rightVal
      }, 200);
    });
  });