function loadAddThis() {
    addthis.init()
}

function addShareText(){
  console.log("Inside, add share text fucntion");
  var $shareText = $("#share_text");
  $shareText.fadeIn("slow",function(){
    $shareText.fadeOut("slow",function(){
      $shareText.fadeIn("slow");
    });
  });   
}
