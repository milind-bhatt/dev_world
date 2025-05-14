let value1: string | null = null;
value1 = null; //good
value1 = 10; //error: Type 'number' is not assignable to type 'string'.

//optional parameters, using "?"
interface Student{
    fullName: string;
    address? : {
        streetName: string;
        houseNummber: number
    }
}
function printCity(student: Student) {
    let streetName = student.address?.streetName;

    if(streetName === undefined)
    {
        console.log("Address not available")
    }
    else
    {
        console.log(streetName)
    }
}

let student: Student = {
    fullName: "Dave" 
}
printCity(student) //Address not available