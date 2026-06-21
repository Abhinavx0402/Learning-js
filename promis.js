//How to Create a Promise:
 let promise = new Promise(function(resolve, reject) {
  // resolve = function to call if successful
  // reject = function to call if failed
  
  setTimeout(() => {
    resolve("Data received!");  // Success
    // OR
    reject("Error occurred!");  // Failure
  }, 2000);
});


//How to Use a Promise:
javascriptpromise
  .then(function(data) {
    // Runs if promise is FULFILLED
    console.log(data);
  })
  .catch(function(error) {
    // Runs if promise is REJECTED
    console.log(error);
  })
  .finally(function() {
    // Runs no matter what (always)
    console.log("Done!");
  });




//   Promise Use Cases in Projects:
// ✅ Fetch data from server
// ✅ Upload files
// ✅ Read files from computer
// ✅ Database queries
// ✅ Timers/delays
// ✅ Any long-running task
// // 
