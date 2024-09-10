let name = "haris"

let seconeName = name;
seconeName = "waqas"

console.log(name);
console.log(seconeName);

// All the premitive data type is stored in stack memory which when manipulated the changes are not directly made into the orginal memory but in the copy 

let user = {
    email : "haris@google.com",
    phone : 55898989
}

let user2 = user;

user2.email = "waqas@gmail.com";

console.log(user.email);
console.log(user2.email);

// All the non-premitive data type are stored in the heap memory when the object is manipulated the cahnges are are directly made in the memory because it provide the refrence to the memory 