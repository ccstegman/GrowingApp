// Get the elements
const tree = document.querySelector('.tree');
const startButton = document.querySelector('#start');
const minutesLabel = document.querySelector('#minutes');
const secondsLabel = document.querySelector('#seconds');
const addButton = document.querySelector('#add');
const countLabel = document.querySelector('#count');
var myPix = new Array("palm.png","779206.png","1056946.png");
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const treeConstant = document.getElementById('treeImage');
const randomX = Math.floor(Math.random() * (windowWidth - treeConstant.width));
const randomY = Math.floor(Math.random() * (windowHeight - treeConstant.height));
// Set the timer length (in seconds)
const timerLength = 1 * 1500;


// Initialize the timer values --------------------------------------------
let secondsRemaining = timerLength;
let intervalId;
let count = 0;

// Define a function to start the timer------------------------------------
function startTimer() {

    //var randomNum = Math.floor(Math.random() * myPix.length);
    //document.getElementById("treeImage").src = myPix[randomNum];
  // Disable the button during the timer
  startButton.disabled = true;
  addButton.disabled = true;

  // Set the interval to update the timer every second
  intervalId = setInterval(() => {
    // Calculate the remaining minutes and seconds
    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;

    // Update the timer display
    minutesLabel.textContent = minutes.toString().padStart(2, '0');
    secondsLabel.textContent = seconds.toString().padStart(2, '0');

    // Update the tree growth
    const percentComplete = 100 - (secondsRemaining / timerLength * 100);
    treeConstant.style.width = `${(percentComplete / 100) * 150}px`;
    treeConstant.style.height = `${(percentComplete / 100) * 150}px`;
    //tree.style.width = `${(percentComplete / 100) * 50}px`;

    //if (percentComplete >= 100) {
        //treeImage.classList.remove('grow');
        //}
    //else {
        //treeImage.classList.add('grow');
    //}

    // Check if the timer is finished
    if (secondsRemaining <= 0) {
    //Increment timer count
    //treesPlanted++;
    // Trigger the tree growth animation
    //tree.classList.add('grow');
    // Stop the timer interval
    clearInterval(intervalId);

    //Reset the timer values
    secondsRemaining = timerLength;
    minutesLabel.textContent = '25';
    secondsLabel.textContent = '00';
    // Re-enable the button
    startButton.disabled = false;

   }
    // Decrement the remaining seconds
    secondsRemaining--;
    }, 1000);
}

//-------------------------------------------------------------------------

function addToGarden() {
    addToGarden.disabled = true;
    count++;
    countLabel.textContent = count;
    treeConstant.style.left = `${randomX}px`;
    treeConstant.style.top = `${randomY}px`;
}

// Attach the startTimer function to the button click event----------------
startButton.addEventListener('click', startTimer);
addButton.addEventListener('click', addToGarden);


// Add the functionality to have trees planted all over the screen. Trees of all different types. Each time you plant a new tree, it plants a new, random tree type. Build a "step away" button functionality--the timer will continue running, but instead of the tree growing, it will start shrinking. If it reaches a certain size (smallness) you lose the tree and have to plant another one.