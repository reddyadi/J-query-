/*alert("JavaScript is loaded in");
console.log("JavaScript is loaded in");*/

$(document).ready(function(){

    //$("div")
    //$(".box")
    //$("#box1")
    //$("div#box1")
    //$("ul li")
    $("#box1").click(function(){
        console.log("green box is clicked");
    });

    $("#box2").dblclick(function(){
        console.log("red box is double clicked");
    });

    $("#myForm").submit(function(){
        event.preventDefault();
        console.log("do this instead");
    });

    $("#box1").click(function(){
        //$("#box2").hide();
        //$("#box2").toggle(5000); //5000 sets 5sec span for displaying
        //$("#box2").fadeOut(5000);
        //$("#box2").addClass("wide");
        //$("#box2").removeClass("wide");
        //$("#box2").toggleClass("wide");
        //$("#box2").css("background-color","pink");
        $("#box2").css({"background-color":"pink", "width":"500px"})
    });





});
