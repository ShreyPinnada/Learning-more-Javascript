// Promises : An Object that manages Asynchronus operations. Wrap a Promise Object around { asynchronus code}
//            "I promise to return a value "
//            pending -> resolved or rejected
//            new promise((resolve,reject) => (asynchronus code));

// //DO THESE CHORES

// 1.WALK THE DOG
// 2.CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH
let dogwalkIs = true;
let cleanKitchenIs = false;
let takeTrashIs = true;
function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (dogwalkIs) resolve("he walked the dog");
      else reject("he DIDN'T walk the dog");
    }, 2000);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cleanKitchenIs) resolve("he cleaned the kitchen");
      else reject("he DIDNT clean the kitchen");
    }, 2500);
  });
}

function takeTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (takeTrashIs) resolve("he took the trash out");
      else {
        reject("he DIDNT take out the trash");
      }
    }, 1000);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("All the chores are done.");
  })
  .catch((value) => {
    console.error(value);
  });
