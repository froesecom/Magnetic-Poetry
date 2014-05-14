$(document).ready( function(){


//=========================================
//STORY FUNCTIONALITY
//=========================================
  var story = {
    checkForStory: function(){
      // Check if story has already been created
      if ($(".story_created").length === 0) {
        this.createStory(); 
      } else {
        console.log($(".story_created"));
        console.log("story already created");
        return
      }
    },
    createStory: function(){
      $.ajax({
      url: "/stories",
      type: "POST",
      dataType: 'json'
      //data: {task: {description: description, complete: false }}
      }).done(function(data){
        console.log("story created");
        $("#container").addClass("story_created");
        //updates the url with the Base64 version of the story id
        history.pushState('', data , data);
        console.log(data);
        
      })
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

    story.checkForStory();
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

