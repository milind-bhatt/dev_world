//TRY CATCH


try {
    let user = null;
    console.log(user.name);  // Trying to access a property of null
} catch (error) {
    console.log("Error in calculation: " + error.message);  // This will catch the error
}

try {
    console.log(user.name); // Trying to access a variable before it is declared
    let user1 = null;
} catch (error) {
    console.log("Error in calculation: " + error.message);  // This will catch the error "Error in calculation: user is not defined"
}

//Extending errors
class InvalidAgeError extends Error {
    constructor(message) {
      super(message); // Call the parent class constructor (Error)
      this.name = "InvalidAgeError"; // Set the name of the error
      this.code = 400; // Add a custom error code (optional)
    }
  }
  
  try {
    let age = -5;
    if (age < 0) {
      throw new InvalidAgeError("Age cannot be negative!");
    }
  } catch (error) {
    console.log(`${error.name}: ${error.message} (Code: ${error.code})`); //InvalidAgeError: Age cannot be negative! (Code: 400)
  }