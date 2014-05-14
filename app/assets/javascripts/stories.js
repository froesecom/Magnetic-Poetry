 $(document).ready( function(){
  $(".word").on("click", function () {
    var leftPosition = $(this).css("left");
    var topPosition = $(this).css("top");
    console.log("left:" + leftPosition + " top:" + topPosition);
    console.log($(this).position());
    // debugger;
    // console.log(this.css("left"));
  });

  $(function() {
    $( ".word" ).draggable();
  });

  if (window.jQuery) {
    console.log("jquery working");
  }
});
// how do i get the x/y coordinates of #box
