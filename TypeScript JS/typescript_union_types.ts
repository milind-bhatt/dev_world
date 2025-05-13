//Union OR
function printName(code:string | number)
{
    console.log(code)

}
printName(007)
printName("James Bond")
printName(false) //Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

//Union OR
function printName2(code:string | number | boolean)
{
    console.log(code)

}
printName2(007)
printName2("James Bond")
printName2(false) //works now