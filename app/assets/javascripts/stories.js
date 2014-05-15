
//====================================
//Start retriving story information, if story exists
//====================================
var site_data
var pathname = (window.location.hash).replace('#','');

if (pathname !== '') {
  console.log("here is pathname" + pathname);
  //go and get ajax data and save to site_data RENAME SITE_DATA
}

//wait for the page to finish loading
$(document).ready( function(){
//=========================================
//STORY FUNCTIONALITY
//=========================================
  var story = {
    checkForStory: function(){
      // Check if story has already been created
      if (pathname) {
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
        //updates the url 
        history.pushState('', data , '#' + data);
        console.log(data);

        pathname = (window.location.hash).replace('#','');
      })
    }
  }

  
//=========================================
//STORY_PART FUNCTIONALITY
//=========================================
  var storyPart = {
    createStoryPart: function(wordDomObject, wordJQueryObject){
      //find out x coord of word relative to #fridge div
      var x = Math.round(wordDomObject.offsetLeft - $("#fridge").position().left);
      var y = Math.round(wordDomObject.offsetTop);
      var word_id = parseInt(wordDomObject.id);
      var story_id = parseInt(pathname);
      //set data-story_part to true to use for checking in event listener
      wordJQueryObject.attr("data-story_part", "true");
      debugger;

      $.ajax({
        url: "/story_parts",
        type: "POST",
        dataType: 'json',
        data: {story_part: {x: x, y: y, story_id: story_id, word_id: word_id }}
        }).done(function(story_part_id){
          
          console.log("in done function of createStoryPart");
      });
    }
  }

// ====================================
// EVENT LISTENERS BELOW
// =====================================
  $(".word").on("click", function () {
    //first check if a story exists
    if (pathname !== '') {
      //need to create and if/else statement here to check if the story part exists
      storyPart.createStoryPart(this, $(this));
    }
  });

  $('#category_selector').on('change', function () {
    //check if a story already exists for this URL;
    //if not, create one.
    story.checkForStory();
  });
  

//======================================
//jQueryUI functionality added
//=======================================
  $(function() {
    $( ".word" ).draggable();
  });
  
});

