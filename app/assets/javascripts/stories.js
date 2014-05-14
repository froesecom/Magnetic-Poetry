$(document).ready( function(){


//=========================================
//STORY FUNCTIONALITY
//=========================================
  var story = {
    createStory: function(){
      //something ajax here
      console.log("inside create story function");
    }
  }
  
//=========================================
//STORY_PART FUNCTIONALITY
//=========================================
  var storyPart = {
    createStoryPart: function(word){
      console.log(word.css("top"));
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

  $('#category_selector').on('change', function () {

    story.createStory();
    //var category = $(this).val();
    //console.log('this works', category, story)
  });
  

//======================================
//jQueryUI functionality added
//=======================================
  $(function() {
    $( ".word" ).draggable();
  });
  
});

