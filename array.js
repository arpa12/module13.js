var friendsAge = [15, 17, 14, 13, 15, 12, 42, 53, 13, 15, 15] //..Array..//
var anishaAge = friendsAge[8]; //..8th position's age is anisha's age..//
friendsAge[1] = 21; //..we can replace 1st positions age by 21..//
var position = friendsAge.indexOf(147); //..searching the number 147 in array..//
console.log(friendsAge.length); //..how much element in an array..//
friendsAge.push(147); //..added extra value ..//
friendsAge.push(140);
console.log(friendsAge.length);
friendsAge.pop(); //..minus an element of array..//
console.log(friendsAge);


var name = [32];
console.log(name);
name.unshift('nihan'); //..unshift means add items to the beginning of an array..//
console.log(name);

var value = [571, 990, 390];
value.shift(); //..shift means remove items to the beginning of an array..//
console.log(value);


var tealine = ['kalam', 'salam', 'balam', 'jalam', 'talam', 'kalam']
var part = tealine.slice(2, 4); //..2nd position er element will show in output and (o and 1) position will be sliced by slice..//
console.log(part);