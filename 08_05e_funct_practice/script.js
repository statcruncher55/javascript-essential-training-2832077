/**
 * How arrow functions help us with scoping.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#this_and_Arrow_Functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

//
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
    (function () {
      console.log("this.volume in nested function:", this.volume);
    })();
    (() => {
      console.log("this.volume in arrow function:", this.volume);
    })();
  },
};

// console.log(greenPack.newVolume(5));

const myList = ["Jacob", "Timmy", "Leah", "Robin"];

// const myList = ['item 1', 'item 2', 'item 3'];

const ul = document.createElement("ul");

myList.forEach((item) => {
  const li = document.createElement("li");
  const text = document.createTextNode(item);
  li.appendChild(text);
  ul.appendChild(li);
});

document.body.appendChild(ul);

const divElement = document.createElement("div");
divElement.setAttribute("id", "myDiv");

// divElement.innerText = "Hello World";
divElement.innerHTML = 'Hello, <a href="http://example.com">example.com</a>!';

// divElement.innerHTML = "Hello!";

document.body.appendChild(divElement);

console.log(document.getElementById("myDiv").innerHTML);

function test() {
  console.log("hi reg");
}

const test2 = () => {
  console.log("hi arrow");
};

test();

test2();

// self-invoking function, also known as an immediately-invoked function expression (IIFE), that will run automatically when the script is loaded or when the function is defined.
(function () {
  console.log("this.volume in nested function:");
})();

(() => {
  console.log("arrrow self");
})();
