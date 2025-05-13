let country: {name: string, population: number} = {
    name: "Germany",
    population: 8000000
}

//Optional Properties
let car: {maker:string, price:number} = {
    maker: "BMW" //error: Property 'price' is missing in type '{ maker: string; }' but required in type '{ maker: string; price: number; }'.
}
let car2: {maker:String, price?:number} = {
    maker: "BMW" //no error
}

//Index signatures: An index signature lets you define an object with dynamic keys — where you don’t know all the property names in advance, but you know the type of the keys and values.