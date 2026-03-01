$(document).ready(function(){
    $("button").click(function(){
        // console.log($("body").css("background-color"));
        // console.log($("body").css("background-color", "#32c888"));
        // $("p").css({"background-color": "#32c888"});
        // $("p").css({"background-color": "#32c888", "font-size": "80px"});

        // $("h1, h2, p").toggleClass("green");

        // $("h1").text("New Text in Heading");
        $("h1").html("Hey !!! <span style = 'color:#32c888;'>Atulya</span>, How are you !!!");
    });
});