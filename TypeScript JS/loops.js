//while loop
let i = 0;
while(i<=10)
{
  console.log("i="+i);
  i++;
}

//do-while loop => The condition check can be moved below the loop body using the do..while syntax
let j= 0;
do{
  console.log("j="+j);
  j++;
}while(j<=5)

//for loop
for(let a = 1; a < 5; a++)
{
  console.log("a="+a);
}

//break loop
let x = 0;
while(x<=10)
{
  console.log("x="+x);
  if(x==2) break; //only prints x till 2, skips rest
  x++;
}

//The break <labelName> statement in the loop below breaks out to the label:
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert('Done!');

//some examples

for(let i=0; i<=10; i++)
    {
      if(i%2==0)
      {
      console.log(i);
      }
      
    }
    
    let x = 0;
    while(x<3)
    {
      console.log(x);
      x++;
      
    }
    
    //prime Number
    let y = 2;
    for(y=2; y<100; y++)
    {
      if(y%2!=0 && y%3!=0 && y%4!=0 && y%5!=0)
      {
        console.log(y + " not prime")
      }
    }
    
    let n = 10;
    


