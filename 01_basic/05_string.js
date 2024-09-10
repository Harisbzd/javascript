const objectString = new String("Haris");
// console.log(objectString);
// console.log(objectString.length);
// console.log(objectString.trim());
// console.log(objectString.bold());
// console.log(objectString.replace("Haris" , "Souban"));
// console.log(objectString);
// console.log(objectString.toLocaleLowerCase());
// console.log(objectString.toLocaleUpperCase());

// console.log(objectString[0]);
// console.log(objectString[objectString.length -1 ].toUpperCase());
// console.log(objectString.lastIndexOf("Haris",3));

// slice and substring 

const s = "my name is haris behzad and i am 30 yeas old"
// console.log(s.slice(12))
// console.log(s.substring(-12))
// console.log(s.substring(12))
// console.log(s.substring(12 , 16))
// console.log(s.substring(-12 , 16))
// console.log(s.slice(12 , -16))
// console.log(s.slice(-12 , -16))
// console.log(s.slice(2 , 4))

/* so basically in substing if we take nagitve number it is always consider zero and in slice if we take negative number it should always be the
 secong argument of the function because if it is first argument of the function the second argument should also be the negative if. not thn it 
 will aleways return empty string in short the first argument should always be smaller then the second aeguemnt */

// split methord 


// console.log(s.split(" "));
// console.log(s.split(" ", 2));

/* so split methord is the methord that takes in 2 permeter , second one is optional so the first perameter is to define based on what charchter
 the split should happen and the limit is to show how many maximum output should it make */

// include methord 


// console.log(s.includes("haris"));
// console.log(s.includes("haris" , 21));

/* the include methord is used to find wethere the give perameter is the in the string of not and if the word is present in the the sting it 
will return the value in boolen which is true if present and false if not present and it can also take second perameter that is the searching index
we can set the index from where we can start the searching  */


// Pad String

// console.log(s.padStart(50 , 123))
// console.log(s.padEnd(50 , 123))

/* Pad String is used to add the extra string infron or at then end of the orginal string it requires 2 perameter the first perameter define the space
in the memory and the second perameter is whats new to be added into the string is the memeory space that is allocated new using perameter is less 
then the orginal string then it will just return the orginal perameter to add the the extra string when permater that is used to allot the memoey 
is reuired to be bigger in size by the amount that is can accoumodate the orginal string and the new string and if the memory allocated is more the 
orginal string but it can not accoumodate the new string what it will do is it will add the amount of the element in the new string from the start to 
the amount when the memory is full  */


// Local Compare 

console.log("ä".localeCompare('a','de'));
console.log("ä".localeCompare('a','sv'));
console.log("ä".localeCompare('a','sv',{sensitivity : 'base'}));
console.log("ä".localeCompare('a','de',{sensitivity : 'base'}));

/* local compare is used when we take language into operation it retruns -1 when the element we want to compare comes before the target element,
it return 1 when the element we want to compare comes after the traget element and it returns zero when tht element we want to coampare and the
traget element is at the some postion 

localcompare can take upto three arguement in which the last two are optional the element is the target element and the second one is the language 
and the third one is the the base value what i mean by that some langauge have different styles of a in denish ä and a are same when the sesitivity is 
base but in sweden these both are different values  
*/









