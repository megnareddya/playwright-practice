//Math.js
console.log(1+2);
console.log(5-2);
console.log(3*7);
console.log(10/6);
console.log(10%6);
//Conditions->>,<.>=,<=,===,!==,if,if-else,else-if,&&,||,!
console.log(1>2);
console.log(1<2);
console.log(1>=2);
console.log(1<=2);
console.log(1===2);
console.log(1!==2);
let n='Megna';
let age=25;
if(n==='Megna')
{
console.log('yeah')
}
if(n==='Megna' && age===27)
{
    console.log('yes');

}
else if(n==='Megna'&& age===25)
{
    console.log('print this');

}
else
    {
    console.log('nothing')
}
//Create a variable temperature = 32. If it's above 30, print "It's hot", otherwise print "It's nice".
let temperature=32;
if(temperature >= 30)
{
    console.log("It's hot");
}
else{
    console.log("It's nice");
}
//Create a variable number = 7. Print whether it's positive, negative, or zero
let something=7;
if(something===0)
{
    console.log('zero');
}
else if(something < 0)
{
    console.log('negative');
}
else
    {
    console.log('positive');
}
//Create age = 16 and hasPermission = true. Print "Allowed" if the person is 18 or older OR has permission. Otherwise print "Not allowed".
let ages = 16;
let hasPermission = true;
if((ages >= 18) || (hasPermission === true))
{
    console.log('allowed');
}
else{
   console.log('not allowed'); 
}
