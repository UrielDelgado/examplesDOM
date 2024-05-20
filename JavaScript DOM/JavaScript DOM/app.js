"use strict";

// Changing the document title
document.title = "Netflix";

// Demonstrating different ways to set text content
// innerHTML: Includes HTML tags, which means you can insert HTML elements along with the text.
document.getElementById("message").innerHTML = "<h1>Demo</h1>";

// innerText: Preserves spacing and line breaks as rendered in the browser. It includes only the visible text.
document.getElementById("message").innerText =
  "                   Plain text with spaces";

// textContent: Includes all the text content of the node, preserving the text structure but not the spaces,
// and ignoring HTML tags. It also includes text hidden by CSS.
document.getElementById("message").textContent =
  "          Example text with ignored spaces";

// Selecting an element by its ID and changing its style
const myDemo = document.getElementById("demo");
myDemo.style.border = "2px solid green";

// Grabbing elements using a collection of classes (HTMLCollection) and applying styles
const msgAreas = document.getElementsByClassName("msgArea");
for (let index = 0; index < msgAreas.length; index++) {
  const element = msgAreas[index];
  element.style.border = "2px solid red";
}

// Selecting elements by their tag name and changing the style of the second <h1> tag
const myTitles = document.getElementsByTagName("h1");
myTitles[1].style.border = "2px solid blue";

// Adding an event listener to a button to toggle navigation visibility
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", hideAndUnhideNavigation);

function hideAndUnhideNavigation() {
  const myNavigation = document.querySelector("nav");
  const myButton = document.getElementById("myButton");

  // Toggle navigation display and button text
  const isHidden = myNavigation.style.display === "none" || myNavigation.style.display === "";

  myNavigation.style.display = isHidden ? "block" : "none";
  myButton.innerText = isHidden ? "Hide Navigation" : "Unhide";
}

// Summary of DOM selection methods
// document.getElementById - Selects a single element by its ID (unique per HTML page)
// document.getElementsByClassName - Selects multiple elements by their class name (returns an HTMLCollection)
// document.getElementsByTagName - Selects multiple elements by their tag name (returns an HTMLCollection)

// Example of iterating over an HTMLCollection using Array.from and forEach
const allMsgAreas = document.getElementsByClassName("msgArea");
Array.from(allMsgAreas).forEach((element) => {
  console.log("Array.from forEach:", element.textContent);
});
