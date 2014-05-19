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
      var x = wordDomObject.offsetLeft - $("#fridge").position().left;
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