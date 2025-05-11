//Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

let map = new Map();
map.set("A", "India")
map.set(1, "Germany")
map.set(false, "boolean")

console.log(map.get(1)) //Germany
console.log(map.get(false)) //boolean

//Iteration over Map
let veggies = new Map(
    [
        ['Tomato', 200],
        ['Cucumber', 10],
        ['Potato', 1000],
    ]
)

for(let vegetables of veggies.keys())
{
    console.log(vegetables) //Tomato Cucumber Potato
}
for(let vegetablesValues of veggies.values())
{
    console.log(vegetablesValues) //200 10 1000
}
for(let vegetablesKeysAndValues of veggies)
{
            console.log(vegetablesKeysAndValues) //Entire vegies with key value pair
}

//Set
let set = new Set()

let milind = {name: 'Milind'}
let dave = {name: 'Dave'}

set.add(milind)
set.add(dave)
console.log(set) //Set(2) { { name: 'Milind' }, { name: 'Dave' } }
console.log(set.size) //2

//fetch all values inside set
for (let user of set) {
    console.log(user.name); // Milind, then Dave
  }