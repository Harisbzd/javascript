let score = "Haris"

//console.log(typeof score)
//console.log(typeof (score))

let valueInNumber = Number(score);

//console.log(valueInNumber);
//console.log(typeof valueInNumber); // all though it says that is has been converted into number but when we check what is inside the memory location 

// "33" when converted into integer => 33
// "33abc" when connverted into integer give NaN which stands for not a number
// boolean true when conveeted into intger is 1 
// boolean false when converted itno intger is 0


let isLoggedIn = "haris"
let isNotLoggedIn = ""

//let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

//let booleanIsNotLoggedIn = Boolean(isNotLoggedIn)
//console.log( booleanIsNotLoggedIn)

// when the string is empty it value is always false and when the strign is not empty the the value of the boolean is true 

let isNotAvaliable = null;

//let boolenIsNotAvaliable = Boolean(isNotAvaliable)
//console.log(boolenIsNotAvaliable);

// boolean for null is always flase 


//let numberIsNotAvaliabel = Number(isNotAvaliable);
//console.log(numberIsNotAvaliabel);

// when  null is converted into interger it is zero 

// when converting into string any thing can be converted into the string 


// prefix and postfix //

let x = 5;
let y = ++x; // x is incremented to 6, then y is assigned the value 6
// console.log(x); // Output: 6
// console.log(y); // Output: 6


let n = 5;
let m = n++;

// console.log(n);
// console.log(m);

// in prefix we can see that the value is first incrementes and the used 
// but is post fix the valuse is first used and the incremented 


console.log(1+2);
console.log("1"+2);
console.log("1"+"2");
console.log(1+"2");
console.log(1+2+"2");
console.log("1"+2+2);





