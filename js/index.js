var imgs = $("#sb >img");
var last = imgs.length-1;
var sno = 0;

$(imgs[sno]).siblings("img").css("left","-1200px");

function slide(){
    $(imgs[sno]).animate({
		"left": 1200
	},1000,function(){
		$(this).css({"left":-1200,"top":0});
	});

	sno++;
	if(sno>last) sno=0;

	$(imgs[sno]).animate({
		"left":"0",
		"top" :"0"
	},1000);
}
var st= setInterval(slide,1000);