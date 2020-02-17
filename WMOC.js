var name = "Bob";
var isRaining = true;
var hasPet = false;
var job = "Web Developer";
var cash = 100;
if( name != 'Bob'){
    console.log('Hello Strager');
}
else{
    console.log('Hello Bob');
}
if(isRaining = true){
    console.log('I need a coat');
    cash -= 50;
}
if( job = 'Web Developer'){
    console.log('Keep up the good work');
    job = 'Senior Web Developer';
    cash +=500;
}
if( hasPet = false){
    hasPet = true;
    cash -=1500;
}
console.log('Payday');
cash +=2000;
if ( cash > 1000){
    console.log('Vacation Time'); 
    cash -=1200;
}
console.log(cash);