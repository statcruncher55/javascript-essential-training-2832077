// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

//  same as css targeting
// returns a dom object
document.querySelector("main");

document.querySelector(".maincontent");

document.querySelector("main li:last-child");

// - returns a node list
document.querySelectorAll("main li");

// - can also do for loops on this node list
document.querySelectorAll("main li").forEach((item) => (item.style.backgroundColor = "red"));

document.querySelectorAll("main li:last-child").forEach((item) => (item.style.backgroundColor = "blue"));

// ** Older targetting methods **
// These used to be the only way to target items on a page, so they may be in older code
// However using the querySelector is newer and uses the css format type for targetting items

document.getElementsByClassName("packprop");
// returns an html collection - can use for each to loop through

document.getElementById("everyday");
// returns a document object by id

// ----------------------------------------------------------

// DON'T USE THESE METHODS

// get class name
document.querySelector("h1").className;

// set a new class
document.querySelector("h1").className = "new-class";

// IMPORTANT - PROBLEMATIC USING THIS METHOD TO CHANGE CLASS NAMES AS YOU CAN OVERWRITE A LOT OF THINGS
// ALSO, IN REACT className is reserved setting an element's class
// AS to not be confused or interact with the normal javascript "class" keyword

// https://reactjs.org/docs/faq-styling.html

// INSTEAD USE ELEMENT.classList

document.querySelector("li").classList;
// returns a DOMTokenList collection

document.querySelector("main li:first-child").classList;

document.querySelector("main li:first-child").classList.add("new-class");

document.querySelector("main li:first-child").classList.remove("new-class");

document.querySelector("main li:first-child").classList.toggle("new-class");

document.querySelector("main li:first-child").classList.replace("packprop", "new-class");

// Element.attributes
// everything inside a tag is considred an attribute

document.querySelector("img").attributes;
// returns a NamedNodeMap

document.querySelector("img").hasAttribute("src");
// returns true or false

document.querySelector("img").getAttribute("src");
// returns the attribute

document.querySelector("img").setAttribute("alt", "A drawing of a backpack");

document.querySelector("img").removeAttribute("alt");

// Inline CSS
document.querySelector(".site-title").style;

document.querySelector(".site-title").style.color;
// returns color setting

document.querySelector(".site-title").style.color = "purple";
// creates new inline css on that element

document.querySelector(".site-title").style.backgroundColor = "pink";
// NOTE THAT ALL THE CSS ELEMENTS HAVE BEEN CAMEL CASED
// THIS IS BECAUSE JAVASCRIPT DOESN'T LIKE "-" TO BE IN VARIABLE NAMES

document.querySelector(".site-title").innerHTML = "TEST";
