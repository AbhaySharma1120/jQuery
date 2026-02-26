$("document").ready(function () {
  $("button").click(function(){

    //hides all paragraphs
    // $("p").hide();

    //hides everything
    // $("*").hide();

    //hides the selector it has instance of
    // $(this).hide();

    //hides the item with particular id
    // $("#para4").hide();

    //hides the item matching the class
    // $(".main").hide();

    // $("div .main").hide();

    // $("div .multi p").hide();

    // $("p.main").hide();

    $("#para4, .main").hide();

  });
});
