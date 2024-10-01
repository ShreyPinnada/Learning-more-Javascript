// Promises : An Object that manages Asynchronus operations. Wrap a Promise Object around { asynchronus code}
//            "I promise to return a value "
//            pending -> resolved or rejected
//            new promise((resolve,reject) => (asynchronus code));

// //DO THESE CHORES

// 1.WALK THE DOG
// 2.CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

// we can use async await instead of the promises i just copied the code from promises and edit it to use async
let dogwalkIs = true;
let cleanKitchenIs = true;
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

async function chores() {
  const walkDogResult = await walkDog();
  console.log(walkDogResult);

  const cleanKitchenResult = await cleanKitchen();
  console.log(cleanKitchenResult);

  const takeTrashResult = await takeTrash();
  console.log(takeTrashResult);

  console.log("All chores completed ");
}

chores();
