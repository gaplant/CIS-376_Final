$(".card").draggable({     //makes card class draggable, performs scorecheck function when drag is complete
  stop: function () {
    var offset = $(this).offset();
    var xPos = offset.left;
    var yPos = offset.top;
    $("#posX").text("x: " + xPos);
    $("#posY").text("y: " + yPos);
    scoreCheck()
  }
  
}); 


function scoreCheck() {
  console.log("score check");

  var points = 0;   //initializes points

  var containerDiv = document.getElementById("cardBox");
  var innerDivs = containerDiv.getElementsByClassName("card");

  var screenWidth = window.innerWidth; //assigns variable for overall screen dimensions
  var screenHeight = window.innerHeight;

  console.log(screenWidth);
  console.log(screenHeight);

  for (var i = 0; i < innerDivs.length; i++) {  //loops through each card in containing div, pulling X and Y coordinates 
    var offset = $(innerDivs[i]).offset();
    var xPos = offset.left;
    var yPos = offset.top;

    console.log(innerDivs[i].id);
    console.log(xPos);
    console.log(yPos);

    if (xPos < screenWidth / 2) {   //for each card, if the card position X is less than half of the overall screen width, it is considered left
      console.log("left");

      if ($(innerDivs[i]).hasClass("even") == true && yPos >= 375) { //checks cards Y position to make sure it falls within boundaries
        points += 1; //iterates point counter 
        console.log(points);
      }
    } // end containing if
    else { //otherwise, if card is not left, it is right
      console.log("right");
      if ($(innerDivs[i]).hasClass("odd") == true && yPos >= 375) { //performs same Y coord check for right cards
        points += 1; // iterates points
        console.log(points);
      }
    } // end else
  }
  
  if (points == 1) {
     document.getElementById("scoreZone").innerHTML = points + " point"; //if points are equal to just 1, removes s from the word "points"
  }
  else {
  document.getElementById("scoreZone").innerHTML = points + " points"; //otherwise, updates scoreZone div to show the total number of points earned
  }
}
