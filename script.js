console.log("Script running...");
// Task 1: CSH Mode
// Select the CSH mode button and console log to confirm you selected successfully
let cshModeButton = 
  document.getElementById("csh")
console.log("CSH mode button selected successfully:",cshModeButton)

// Select the body and console log to confirm you selected successfully
let bodyElement = document.body;
console.log("Body selected successfully:",bodyElement);

// Add an event listener such that when you click the CSH mode button, the background color of body becomes green
document.getElementById("csh").addEventListener("click",function() {
  document.body.style.backgroundColor = "green";})





// Task 2: All off button
// Select the all off button and console log to confirm you selected successfully
let alloffButton = 
  document.getElementById("clear");
console.log("All off button selected successfuly",alloffButton)

// Select all the lightbulb p tags and console log the length to confirm you selected successfully
let lightBulb = 
  document.querySelectorAll("lightBulb");
console.log("Number of lightbulbs selected successfuly", lightBulb.length)

// Add an event listener such that when the all off button is clicked, the background color of all the lightbulbs becomes black

alloffButton.addEventListener("click",function(event){
  for(let i = 0; i < lightBulb.length; i++){
    lightBulb[i].style.backgroundcolor = "black";
      
  }
})




// Task 3: On and off feature
// Add an event listener to the FIRST lightbulb such that when you click it, the background color of that p tag changes to white

document.querySelector(".lightbulb").addEventListener("click",function(event){
  this.style.backgroundColor = "white";
})




// Extra credit: try to use a for loop to make every lightbulb's background color to change when you click it






