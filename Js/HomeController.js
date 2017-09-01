
/**
 * Created by DinukaX4 on 8/30/2017.
 */


$("#container").mousemove(function (event) {
    var x=event.pageX;
    var y=event.pageY;
    console.log(x,y);

    $("#move-image").css("left",x + "px");
    $("#move-image").css("top",y + "px");
    $("#move").css("left",x + "px");
    $("#move").css("top",y + "px");



    // $("#move-image").css("left",msg1  +"px");
    // $("#move-image").css("left",msg2  +"px");
    // $("#move").css("left",msg1  +"px");
    // $("#move").css("top",msg2 + "px");


});



