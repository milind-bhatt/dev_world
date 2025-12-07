//A promise represents the result of an asynchronous operation, which can be resolved or rejected.

let p = new Promise((resolve, reject) => resolve("done"));
p.then(console.log); // "done"

//another example
let myPromise = new Promise((resolve, reject) => {
    let isSuccess = true; // Imagine this checks if something works
  
    if (isSuccess) {
      resolve("Success!"); // Operation completed successfully
    } else {
      reject("Failed!"); // Something went wrong
    }
  });
  
  myPromise
    .then(result => console.log(result))  // Success!
    .catch(error => console.log(error));  // Failed!