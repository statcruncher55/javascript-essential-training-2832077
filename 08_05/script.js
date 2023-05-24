/**
 * How arrow functions help us with scoping.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#this_and_Arrow_Functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

// Define a default volume for the window (the entire DOM):
window.volume = 20;

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) {
    console.log("this.volume in the method:", this.volume);
    this.volume = volume;
    console.log("this.volume after update:", this.volume);
    // will be hoisted to global scope and be incorrect
    (function () {
      console.log("this.volume in nested function:", this.volume);
    })();
    // works because an arrow function DOES NOT HAVE IT'S OWN THIS ******
    // ARROW FUNCTION DOES NOT KNOW WHAT THIS MEANS AND WILL REFER TO THE CLOSEST SCOPE
    (() => {
      console.log("this.volume in nested function:", this.volume);
    })();
  },
};

console.log(greenPack.newVolume(5));

// DON'T USE ARROW FUNCTIONS AS METHODS (FUNCTIONS INSIDE OF AN OBJECT)
// BECAUSE IT WILL NOT KNOW WHAT SCOPE TOUSE.
