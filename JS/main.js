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

        $('section').each(function(){
          var id = $(this).attr('id');
          var height = $(this).height();
          var offset = $(this).offset().top - 200;
          var top = $(window).scrollTop();
          if(top >= offset && top < offset + height){
            $('.navbar ul li a').removeClass('active');
            $('.navbar').find('[data-scroll="' + id + '"]').addClass('active');
          }
        });
    
      });
    
    
    });
    
    

var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 6){
    counter = 1;
  }
}, 5000);

var i=0;
function read(){
  if(!i){
    document.getElementById("more").style.display="inline";
    document.getElementById("dots").style.display="none";
    document.getElementById("read").innerHTML="Read Less";
    i=1;
  }
  else{
    document.getElementById("more").style.display="none";
    document.getElementById("dots").style.display="inline";
    document.getElementById("read").innerHTML="Read More";
    i=0;
  }
}
