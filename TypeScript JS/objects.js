let tshirt = {
    brand: 'C&A',
    color: 'black',
    size: 'XL',
    price: '$55',
    "Cotton Material?": true  // multiword property name must be quoted
}
console.log(tshirt["Cotton Material?"]) // to access multiword property name must be quoted
//delete price
delete tshirt.price;

let user = {
  name: "John",
  age: 30
};
//check if property for object exist?
console.log( lastname in user ); //false

//for-in: output all properties of user
for(let key in user)
{
    console.log(key)
}


//computed properties
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};
console.log( bag.apple ); // 5 if fruit="apple"





