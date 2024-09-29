// DOM Navigation = process of navigating through a the structure of a html document using javascript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

//..... .firstElementChild

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach((ulElement) => {
//   const firstChild = ulElement.firstElementChild;
//   firstChild.style.backgroundColor = "yellow";
// });

//...... .lastElementChild
// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach((ulElement) => {
//   const firstChild = ulElement.lastElementChild;
//   firstChild.style.backgroundColor = "yellow";
// });

//..... .nextElementSibling
//adding ids to all the list items
// const element = document.getElementById("apple");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";

//if instead of apple we passed fruits then all of them will get highlighted as they are all siblings
// prevElementSibling works the same

//...... .parentElement
// const element = document.getElementById("apple");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";

//...... .children
// this will return a html collection so we cannot use foreach rather we have to convert to array and then use it
const element = document.getElementById("fruits");
const children = element.children;
Array.from(children).forEach((child) => {
  child.style.backgroundColor = "yellow";
});
