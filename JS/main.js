
type="text/javascript">
	$('.options-02 a').click(function(){
	$('form').animate({
	height: "toggle", opacity: "toggle"
	}, "slow");
});


$(document).ready(function(){

    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
    $(window).on('load scroll',function(){

        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    
        if($(window).scrollTop() > 30){
          $('header').addClass('header-active');
        }else{
          $('header').removeClass('header-active');
        }
    });









