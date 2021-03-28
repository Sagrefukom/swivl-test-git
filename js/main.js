$(function (){
//TABS  
$(".wrapper .tab").on('click', function() {
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab__item-user").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
//
//ACCORDION
$('.accordion__title').on('click', function(){
    $(this).toggleClass('active').next().slideToggle(300);
  });
//
//DOTS
  let dots = document.querySelectorAll(".dots__item");
for (let i = 0; i < dots.length; i++) {
  dots[i].onclick = function(){
    $(this).toggleClass('active').next().slideToggle(400);
    $(this).toggleClass("on");
  };
}
//     
});