//callback hell is a situation in javascript where callbacks are nested within
//other callbacks to the degree where the code is difficult to read

//this was the old way of handlling asynchronus functions
// now we use promised + async/await to avoid call back hell

//example we have a series of tasks have to be completed

function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 complete");
    callback();
  }, 2000);
}
function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 complete");
    callback();
  }, 1000);
}
function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 complete");
    callback();
  }, 3000);
}
function task4(callback) {
  setTimeout(() => {
    console.log("Task 4 complete");
    callback();
  }, 4000);
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        console.log("All tasks completed");
      });
    });
  });
});
