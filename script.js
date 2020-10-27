$(".level1").click(function() {
    $(".game").css("background", "url(https://i.pinimg.com/originals/16/8f/33/168f33328213ef4b913675d3a4eefa11.gif)");
   
});

$(".start-game").click(function(){
    $(".game").fadeToggle();
});

$(".ryu").click(function(){
	$(".sprite").hide();
    $(".sprite-jab-attack").show();
});
$(".ryu").dblclick(function(){
    $(".sprite").hide();
        $(".sprite-jab-attack").show();

});
