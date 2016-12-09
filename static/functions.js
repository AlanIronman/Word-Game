$(document).ready(function(){
    $("div#links").hide();
    $("div#links").fadeIn(30000);

    
    $("div#v").delay(27000).fadeOut(5000);


    $("div#ruledrop").hide();
    $("div#rules").hide();
    $("div#startdrop").hide();
    $("div#start").hide();
    $("h1#three").hide();
    $("h1#two").hide();
    $("h1#one").hide();
    $("h1#go").hide();
    $("h1#three").delay(1000).fadeIn(600);
    $("h1#three").fadeOut();
    $("h1#two").delay(1700).fadeIn(600);
    $("h1#two").fadeOut();
    $("h1#one").delay(2700).fadeIn(600);
    $("h1#one").fadeOut();
    $("h1#go").delay(3700).fadeIn(600);
    $("h1#go").fadeOut();
    $("div#startdrop").delay(4700).slideDown();
    $("div#start").delay(5200).slideDown();

    $("#rlink").click(function(){
    	$("div#ruledrop").slideDown();
    	$("div#rules").slideDown();
    });

    $("#rul").click(function(){
    	$("div#ruledrop").fadeOut();
    	$("div#rules").fadeOut();
    });

    var colors = ['red','yellow','blue'];
    var step = 0;
    setInterval(function(){
        $("#winhead").css('color',colors[step]);
        if(step == colors.length-1) 
            step=0;
        else
            step+=1;
    },500);

    $("#audio").hide();
    $("#audiobutton").click(function(){
        $("#audio").toggle();
    });

});
