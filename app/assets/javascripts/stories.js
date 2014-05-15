
//==========================
//Start retriving story information, if story exists
//====================================
var site_data, current_pathname;
var original_pathname = (window.location.pathname).replace('/','');

if (original_pathname !== '') {
  console.log("here is pathname" + original_pathname);
  //got and get ajax data and save to site_data RENAME SITE_DATA
}

$(document).ready( function(){
  
  
//=========================================
//STORY FUNCTIONALITY
//=========================================
  var story = {
    checkForStory: function(){
      // Check if story has already been created
      if (current_pathname) {
        console.log("story already created");
        return 
      } else {
        this.createStory();
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

        current_pathname = (window.location.pathname).replace('/','');
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

