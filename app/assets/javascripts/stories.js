 $(document).ready( function(){
  
    var storyPart = {
      createStoryPart: function(word){
        console.log(word);
      },
      secondThing: 0,

    }

// ====================================
// EVENT LISTENERS BELOW
// =====================================
    $(".word").on("click", function () {
      //need to create and if/else statement here to check if the story part exists
        storyPart.createStoryPart($(this));
      

      // var leftPosition = $(this).css("left");
      // var topPosition = $(this).css("top");
      // console.log("left:" + leftPosition + " top:" + topPosition);
      // console.log($(this).position());
    
    });

    $(function() {
      $( ".word" ).draggable();
    });

    if (window.jQuery) {
      console.log("jquery working");
    }
});

