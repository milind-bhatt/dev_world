function getAge(myNumber2): number {
    return(myNumber2)
}
getAge("A") //error
getAge(12)

//Void Return Type- can be used to indicate a function doesn't return any value.
function printHello(): void {
    console.log("Just hello")
}

// Default Parameters
function votingAge(name: String, age: number = 18)
{
    console.log( name + " should be " + age) //"Milind should be 18" 
}
votingAge("Milind")

//Rest parameters: allows the function to accept any number of arguments as an array.
function calculator(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(calculator(10,20,30,45,90))
