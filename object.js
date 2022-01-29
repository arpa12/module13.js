var student1 = { id: 121, phone: 017765, name: "rafat" };
var student2 = { id: 435, phone: 63726, name: "mahi" };

var phoneNo = student1.phone; //output for specific property//
//var phoneNo = student1["phone"];//

student2.phone = 786; //update phone//
student2.film = "2012"; //update and added properties//

console.log(phoneNo);
console.log(student2);