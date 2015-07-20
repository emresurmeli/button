'use strict';

// Create button to add clicked and clicks attributes
var btn           = document.createElement('button');
    btn.clicked   = false;
    btn.clicks    = 0;
    btn.innerHTML = "I've been clicked " + btn.clicks + " times"
// Get div container and append button.
var div = document.getElementById('container');
    div.appendChild(btn);

// Add click event listener and a clicked function
btn.addEventListener('click', clicked);

function clicked(e) {
  // On initial click create new button
  if(this.clicked === false) {
    // Increment this' clicks and set clicked to true
    this.clicks ++;
    this.clicked   = true;
    this.innerHTML = "I've been clicked " + this.clicks + " times";

    // Create new button
    var newBtn = document.createElement('button');
        newBtn.clicks = 0;
        newBtn.clicked = false;
        newBtn.addEventListener('click', clicked);
        newBtn.innerHTML = "I've been clicked " + newBtn.clicks + " times";

    // Append new button to conteiner
    var container = document.getElementById('container');
        container.appendChild(newBtn);
  } else {
    // Else just increment clicks and update text
    this.clicks ++;
    this.innerHTML = "I've been clicked " + this.clicks + " times";
  }
}
