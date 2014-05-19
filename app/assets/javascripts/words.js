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
      var randDegreeRotation = parseInt(pOrM + degrees);
      //create words
      $("#" + parent_div_id).append("<div class='word' data-selector_id='" + selector_id + "' id='"+word.id+"'>"+word.name+"</div>");
      $("#" + word.id).rotate(randDegreeRotation);
    });
    //make words draggable
    $(function() {
      $( ".word" ).draggable({
        revert: 'invalid'
      });
    });
    console.log("word objects", parent_div_id);
  }
}
