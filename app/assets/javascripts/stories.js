//=============================================
//LOOK AT URL TO CHECK IF STORY ALREADY EXISTS
//=============================================
function CheckForStory() {
  //create global variable for pathname
  pathname = (window.location.hash).replace('#','');
   //check for story in the URL
   if (pathname !== '') {
    //if story, get data
      $.ajax({
      url: "/story_parts",
      type: "GET",
      dataType: 'json',
      data: {story_id: {story_id: pathname}}
      }).done(function(data){
        ConstructPage(data);
    });
  } 
}

CheckForStory();

function ConstructPage(storyPartsWords) { 
  console.log("constructing page");
  //create array so we can add + or - to rotation
  var plusOrMinus = Array("", "-");
  
  //create each story part
  _.each(storyPartsWords, function(storyPartWord){
      var storyPart = storyPartWord[0]
      var word = storyPartWord[1]
      //add random amount of rotation to storypart
      // var degrees = Math.random() * 6;
      // var pOrM = plusOrMinus[Math.floor(Math.random() * plusOrMinus.length)];
      // randDegreeRotation = parseInt(pOrM + degrees);
      // //create words
      // $("#fridge").append("<div class='word' data-selector_id='" + selector_id + "' id='"+word.id+"'>"+word.name+"</div>");
      // $("#" + word.id).rotate(randDegreeRotation);
  });
}

//=================================================
// WAIT FOR THE PAGE TO FINISH LOADING
//===============================================
$(document).ready(function (){
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

      //create story part via ajax
      $.ajax({
        url: "/story_parts",
        type: "POST",
        dataType: 'json',
        data: {story_part: {x: x, y: y, story_id: story_id, word_id: word_id }}
        }).done(function(story_part_id){
          //set data-story_part to true to use for checking in event listener
          wordJQueryObject.attr("data-storypart", story_part_id);
          //remove selector data attribute so word is not removed each time new category selected
          wordJQueryObject.attr("data-selector_id", "");
          console.log("Story part created");
      });
    }, updateStoryPart: function(wordDomObject){
      //get the properties of the story part
      var x = wordDomObjectBlu - $("#fridge").position().left;
      var y = wordDomObject.offsetTop;
      var story_part_id = parseInt(wordDomObject.dataset.storypart);
      
      //update story part via ajax
      $.ajax({
        url: "/story_parts/" + story_part_id,
        type: "PUT",
        dataType: 'json',
        data: {story_part: {x: x, y: y, id: story_part_id }}
        }).done(function(){
          console.log("Story part updated");
      });
    }
  }

//============================================
//WORD FUNCTIONALITY
//============================================
var word = {
  displayWords: function (selectorJQueryObj) {
    //use selected_category(which is category id) to find word objects
    var selected_category = selectorJQueryObj.val();
    var word_objs = categorised_words[selected_category];
    
    //find id of selector so we can decide which sidebar to display words in
    var selector_id = selectorJQueryObj.attr('id');
    
    //find id sidebar so we can append the words to it
    var parent_div_id = $('#' + selector_id).closest('div').attr('id')
    //DELETE ALL DIVS
    //iterate through words and create them
    var plusOrMinus = Array("", "-");
    _.each(word_objs, function(word){
      //add random amount of rotation to words
      var degrees = Math.random() * 6;
      var pOrM = plusOrMinus[Math.floor(Math.random() * plusOrMinus.length)];
      randDegreeRotation = parseInt(pOrM + degrees);
      //create words
      $("#" + parent_div_id).append("<div class='word' data-selector_id='" + selector_id + "' id='"+word.id+"'>"+word.name+"</div>");
      $("#" + word.id).rotate(randDegreeRotation);
    });
    //make words draggable
    $(function() {
      $( ".word" ).draggable();
    });
    console.log("word objects", parent_div_id);
  }
}

// ====================================
// EVENT LISTENERS BELOW
// =====================================
  $("#container").on("mouseup", ".word", function () {
      
      var wordObject = $(this);
      
      //check if storypart already exists 
      //update or create accordingly
      if (wordObject.data("storypart")) {
        storyPart.updateStoryPart(this);
      } else {
        storyPart.createStoryPart(this, wordObject);
      } 
  });

  $("#basic_category, #theme_category ").on("change", function () {
    var selector_id = $(this).attr('id')
    //remove the words in the related div
    $("*[data-selector_id='" + selector_id + "']").remove();
    //check if a story already exists for this URL;
    //if not, create one.
    story.checkForStory();
    
    //pass jQuery selector into displayWords function
    word.displayWords($(this));
  });
  
});

