$(".card").draggable({
  stop: function () {
    var offset = $(this).offset();
    var xPos = offset.left;
    var yPos = offset.top;
    $("#posX").text("x: " + xPos);
    $("#posY").text("y: " + yPos);
    scoreCheck()
  }
  
}); 


$(".card").draggable({
  drag: function () {
    document.getElementsByClassName("cardHead").innerHTML = "";
    
  }
  
});

function scoreCheck() {
  console.log("score check");

  var points = 0;

  var containerDiv = document.getElementById("cardBox");
  var innerDivs = containerDiv.getElementsByClassName("card");

  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;

  console.log(screenWidth);
  console.log(screenHeight);

  for (var i = 0; i < innerDivs.length; i++) {
    var offset = $(innerDivs[i]).offset();
    var xPos = offset.left;
    var yPos = offset.top;

    console.log(innerDivs[i].id);
    console.log(xPos);
    console.log(yPos);

    if (xPos < screenWidth / 2) {
      console.log("left");

      if ($(innerDivs[i]).hasClass("even") == true && yPos >= 375) {
        points += 1;
        console.log(points);
      }
    } // end containing if
    else {
      console.log("right");
      if ($(innerDivs[i]).hasClass("odd") == true && yPos >= 375) {
        points += 1;
        console.log(points);
      }
    } // end else
  }
  
  if (points == 1) {
     document.getElementById("scoreZone").innerHTML = points + " point";
  }
  else {
  document.getElementById("scoreZone").innerHTML = points + " points";
  }
}