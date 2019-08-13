var mySwiper = new Swiper('.swiper-container',{
	loop:true,
	autoplay:true,
	speed:200,
	pagination:{
		el:'.swiper-pagination',
		clickable:true,
	},
	
})
$(".fr").click(function(){
	if($(".wel-2").hasClass("show")){
       $(".wel-2").removeClass("show");

	}else{
	      $(".wel-2").addClass("show");
	}
})
$(".close").click(function(){
	$(".wel-2").removeClass("show");
})
//动画注入
var options = {
    animateThreshold: 100,
    scrollPollInterval: 20
}
$('.aniview').AniView(options);

$(function(){

		
		var shuzi_1=$(".sz1").attr("number")-0;
		var number_1=0;
		var t1;
		var shuzi_2=$(".sz2").attr("number")-0;
		var number_2=0;
		var t2;
		var shuzi_3=$(".sz3").attr("number")-0;
		var number_3=0;
		var t3;
		var shuzi_4=$(".sz4").attr("number")-0;
		var number_4=0;
		var t4;
		$(window).on('scroll', function() {
			if(($(".introduce .ppt1_js").offset().top-$(this).scrollTop()+100)<$(this).height())
			{
				window.clearInterval(t1);
				t1=window.setInterval(function(){
					number_1+=160;
					$(".sz1").html(number_1);
					if(number_1>=shuzi_1)
					{
						$(".sz1").html(shuzi_1);
						window.clearInterval(t1);
					}
				},80);
				window.clearInterval(t2);
				t2=window.setInterval(function(){
					number_2+=10;
					$(".sz2").html(number_2);
					if(number_2>=shuzi_2)
					{
						$(".sz2").html(shuzi_2);
						window.clearInterval(t2);
					}
				},80);
				window.clearInterval(t3);
				t3=window.setInterval(function(){
					number_3+=1;
					$(".sz3").html(number_3);
					if(number_3>=shuzi_3)
					{
						$(".sz3").html(shuzi_3);
						window.clearInterval(t3);
					}
				},80);
				window.clearInterval(t4);
				t4=window.setInterval(function(){
					number_4+=5;
					$(".sz4").html(number_4);
					if(number_4>=shuzi_4)
					{
						$(".sz4").html(shuzi_4);
						window.clearInterval(t4);
					}
				},80);

			}
		if(( $(".ppt4-1").offset().top - $(this).scrollTop()+100 ) < $(this).height()){
				var index12 = 0;
				var addClassOn12;
				addClassOn12 = setInterval(function(){
						if(index12 >= $(".dh").length){
							window.clearInterval(addClassOn12);
							return
						}
						else {
							$(".ppt4-1 .dh").eq(index12).addClass("animated fadeIn").css("opacity",1);
								index12++
							}
					   
				},300);
			}	

			if(( $(".ppt4-2").offset().top - $(this).scrollTop()+100 ) < $(this).height()){
				var index13 = 0;
				var addClassOn13;
				addClassOn13 = setInterval(function(){
						if(index13 >= $(".dh").length){
							window.clearInterval(addClassOn13);
							return
						}else {
							$(".ppt4-2 .dh").eq(index13).addClass("animated fadeInLeftBig").css("opacity",1);
							index13++;
				}
					   
				},300);
			}

		})
	})