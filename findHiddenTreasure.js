
// set up our variables
let width = 400;
let height = 400;
let clicks = 0;
let clickLimit = 20;

// get a random number from 0 to size
let randomNumber = function (size) {
  return Math.floor(Math.random() * size);
};

// create a random target location
let target = {
  x: randomNumber(width),
  y: randomNumber(height)
};

// calculate distance between click event and target
let getDistance = function (event, target) {
  let diffX = event.offsetX - target.x;
  let diffY = event.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

// get a string representing the distance between click and target location
let getDistanceHint = function (distance) {
  if (distance < 10) {
    return "Boiling hot!";
  } else if (distance < 20) {
    return "Really hot";
  } else if (distance < 40) {
    return "Hot";
  } else if (distance < 80) {
    return "Warm";
  } else if (distance < 160) {
    return "Cold";
  } else if (distance < 320) {
    return "Really cold";
  } else {
    return "Freezing!!!";
  }
};

// what to do when player clicks the treasure map
let clickHandler = function (event) {
  console.log("The treasure target coordinate is " + target.x, target.y);
  console.log("Your click coordinate is " + event.offsetX, event.offsetY);

  clicks++;
  if (clicks > clickLimit) {
    alert("GAME OVER!!!");
    return;
  }
  
  // get distance between click event and target
  let distance = getDistance(event, target);
  // convert distance to a hint
  let distanceHint = getDistanceHint(distance);

  // update the distance element with the new hint
  $("#distance").text(distanceHint);

  // if the click was close enough, tell them they won
  if (distance < 8) {
    alert("Found the treasure in " + clicks + " clicks!");
  }

};



// add a click handler to the img
$("#map").click(clickHandler);

/*
BUG DETECTED
While hacking through the code I observed the game ends before the  if condition statemt for (clicks => clickLimit) in the clickHandler function is even executed.

the moment the first click is made on the image map, the if statement get executed if the condition(clicks > clickLimit) is altered to (clicks => clickLimit). I think both conditions shouls work fine as long as long as the click hasn't reach the limit yet. I kind of want to understand why this happens.

NOTE: You can reduce the clickLimit time to observe it.
 */








