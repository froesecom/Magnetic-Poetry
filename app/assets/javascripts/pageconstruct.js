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
  } else {
    //bring down the intro text
    var $intro = $("#intro_text"); 
    $intro.animate({
      top: '80px'
      }, 2000, "easeOutBounce", function () {
      $intro.delay(1500).animate({
        top: "-100%"
      }, 2000);
    });
  } 
}

function ConstructPage(storyPartsWords) { 
  console.log("constructing page");
  //create array so we can add + or - to rotation
  var plusOrMinus = Array("", "-");

  //create each story part
  _.each(storyPartsWords, function(storyPartWord){
    var storyPart = storyPartWord[0];
    var word = storyPartWord[1];
    //add random amount of rotation to word
    var degrees = Math.random() * 6;
    var pOrM = plusOrMinus[Math.floor(Math.random() * plusOrMinus.length)];
    var randDegreeRotation = parseInt(pOrM + degrees);
    
    var wordId = word.id;
    
    //create storyparts
    $("<div class='storypart' data-storypart='" + storyPart.id + "' id='"+wordId+"'>" + word.name + "</div>").appendTo("#fridge");
    $("*[data-storypart='" + storyPart.id + "']").rotate(randDegreeRotation);
    $("*[data-storypart='" + storyPart.id + "']").animate({
      left: storyPart.x + $("#fridge").position().left,
      top: storyPart.y
    }, 1000);
  });
  //make storyparts draggable
  $(function() {
    $( ".storypart" ).draggable({
      //revert: 'invalid'
    });
  });
  setTimeout(function(){
    addShareText();
  }, 2500);
  
}