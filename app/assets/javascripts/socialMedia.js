function loadAddThis() {
    addthis.init()
}

function addShareText(){
  var $shareText = $("#share_text");
  $shareText.fadeIn("slow",function(){
    $shareText.fadeOut("slow",function(){
      $shareText.fadeIn("slow");
    });
  });   
}
