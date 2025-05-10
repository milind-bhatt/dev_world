//variables

//let vs var
let myName;
//let myName => gives error The symbol "myName" has already been declared
var myName2;
var myName2; //no error

if(true)
{
  hisName = "Dirk"
  let hisName; // error "Cannot access 'hisName' before initialization"

  herName = "Sandra"
  var herName; // no error
}

//constants
const age = 44;
age = 12; // gives error "Cannot assign to "age" because it is a constant"