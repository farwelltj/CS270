// radio_click.js
//   An example of the use of the click event with radio buttons,
//   registering the event handler by assignment to the button
//   attributes


// The event handler for a radio button collection

function FavoriteColor (Color) {

// Produce an alert message about the chosen airplane

  switch (Color) {
    case 152: 
      alert("YOUR FAVORITE COLOR IS RED");
      break;
    case 172: 
      alert("YOUR FAVORITE COLOR IS BLUE");
      break; 
    case 182:
      alert("YOUR FAVORITE COLOR IS GREEN");
      break;    
    case 202:
      alert("YOUR FAVORITE COLOR IS YELLOW");
      break;
    case 222:
      alert("YOUR FAVORITE COLOR IS ORANGE");
      break; 
    default:
      alert("Error in JavaScript function planeChoice");
      break;
  }
}