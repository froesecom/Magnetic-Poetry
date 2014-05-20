
$(document).ready(function (){
  //Check for story
  CheckForStory();
  
  //make the fridge the droppable target for dragged words and storyparts
  $('#fridge').droppable({
    accept: '.word, .storypart',
    drop: function (event, ui) {
      var wordObject = $(ui.helper);

      //check if storypart already exists 
      //update or create accordingly
      if (wordObject.data("storypart")) {
        storyPart.updateStoryPart(wordObject.get(0));
      } else {
        storyPart.createStoryPart(wordObject.get(0), $(wordObject.get(0)));
      } 
    }
  });
  //make the trash can dropable for storyparts and .words with data-storypart
  $('#trash').droppable({
    accept: '.storypart, [data-storypart]',
    drop: function (event, ui) {
      var storyPartObject = $(ui.helper);

      storyPart.deleteStoryPart(storyPartObject);
      
    }
  });
  // load AddThis 2 seconds after rest of page loads
  setTimeout(function() {
    loadAddThis();
  }, 2000);


//=========================================
//STORY FUNCTIONALITY
//=========================================
  var story = {
    checkForStory: function(){
      // Check if story has already been created
      if (pathname) {
        console.log("story already created");
        return; 
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
      });
      addShareText();
    }
  };

// ====================================
// EVENT LISTENERS BELOW
// =====================================

  $("#basic_category, #theme_category ").on("change", function () {
    var selector_id = $(this).attr('id');
    //remove the words in the related div
    $("*[data-selector_id='" + selector_id + "']").remove();
    //check if a story already exists for this URL;
    //if not, create one.
    story.checkForStory();
    
    //pass jQuery selector into displayWords function
    word.displayWords($(this));
  });
  
});

