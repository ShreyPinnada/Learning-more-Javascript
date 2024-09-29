// callback = function that is passed as an argument to another function

// use to handle asynchronus operations
// 1.reading a file before printing its contents
// 2.network requests
// 3.interacting with databases

// in layman "Hey when youre done, call this next"

//say i want to calculate the sum before printing it

sum(displayConsole, 1, 2);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  document.getElementById("ResultTag").textContent = result;
}
