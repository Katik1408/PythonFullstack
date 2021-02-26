// // // console.log('Hello from File');

// // //alert('Alert from file');

// // //let isAgree = confirm('DO you agree');
// // //console.log(isAgree);
// // // let uname = prompt();
// // // console.log(uname);

// // // //Variables
// // // let a = 5;
// // // var b = 6;
// // // const c = 3.14;

// //let a = 7;
// // // b = 8.16;

// // // console.log(window.a);
// // // console.log(window.b);
// // // //console.log(c);

// // let firstName = "Rahul"; // Type String
// // let lastName; // Absence of Type
// // let age = 22; // Type Number
// // let isActiveUser = true; //Type Boolean
// // let dateofjoining = null; //Absence of any Value

// // setTimeout(() => {
// //   console.log(firstName);
// // }, 5000);

// // //console.log(firstName);

// // // console.log(typeof firstName);
// // // console.log(typeof lastName);
// // // console.log(typeof age);
// // // console.log(typeof isActiveUser);
// // // console.log(typeof dateofjoining);

// // //Conditional Statements

// let b = "7";

// if (a > b) {
//   console.log("A is greater");
// } else if (b > a) {
//   console.log("B is greater");
// } else {
//   console.log("A and B both are same");
// }

// if (a == b) {
//   console.log("A and B are same");
// } else {
//   console.log("Not same");
// }

// if (a === b) {
//   console.log("A and B are same");
// } else {
//   console.log("Not same");
// }
// let a = 4;
// switch (a) {
//   case 1:
//     console.log("Value of a is " + a);
//     break;
//   case 2:
//     console.log("Value of a is " + a);
//     break;
//   case 3:
//     console.log("Value of a is " + a);
//     break;
//   default:
//     console.log("Value of a is not 1 2 and 3  Value is " + a);
// }

// // let age = 19;

// // let isVoter =
// //   age > 18
// //     ? console.log("You can Vote")
// //     : console.log("You should be atleast 18");

// // console.log("WHile Loop");
// // let i = 6; // Initialization
// // while (i < 5) {
// //   console.log("Value of i is " + i);
// //   i++;
// // }
// // console.log("DO WHile");
// // let j = 6;
// // do {
// //   console.log("Value of j is " + j);
// //   j++;
// // } while (j < 5);

// // console.log("For Loop");

// // for (let k = 0; k < 5; k++) {
// //   console.log("Value of k is " + k);
// // }

//Array
//console.log("Array");
// let arr = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   "firstName",
//   true,
//   {
//     name: "Rahul",
//     age: 25,
//     place: "Bangalore",
//   },
// ];

// console.log("JSON Object Values");
// let obj = {
//   username: "rohit91",
//   emailid: "r@gmail.com",
//   socialaccount: "facebook",
// };
// //console.log(obj);
// //for of --- Arrays
// // for (const i of arr) {
// //   console.log(i);

// // }

// // console.log(obj)
// //for in  -- Objects
// // for (const key in obj) {
// //   console.log(obj[key]);
// // }

// //console.log(arr.length);
// // for (let z = 0; z < arr.length; z++) {
// //   console.log(arr[z])
// // }

// // /**
// //  *
// //  * > Greater than
// //  * < Less than
// //  * >= Greater than or equal to
// //  * <= Less than or equal to
// //  * == double equal to
// //  * === tripple equal to
// //  * && AND
// //  * || OR
// //  * ! NOT
// //  *
// //  *
// //  *
// //  *
// //  */

// //Function Definition
// function show() {
//   let a = 5;
//   console.log(a);
// }

// show(); //Function Calling

// function add(a, b) {
//   console.log(a + b);
// }
// add(6, 7);

// // function addNum(a, b) {
// //   return a + b;
// // }
// //let result = addNum(3, 4);
// //console.log(result);

// function showName(name) {
//   return name;
// }

// let firstName = showName("Rohit");
// console.log(firstName);

// function factorial(num) {
//   let f = 1;
//   if (num === 0) {
//     return f;
//   } else if (num < 0) {
//     return -1;
//   } else {
//     for (let i = 1; i <= num; i++) {
//       f = f * i;
//     }
//     return f;
//   }
// }
// let fact;
// //fact = factorial(7);

// if (fact === -1) {
//   console.log("Invalid Input");
// } else {
//   console.log(fact);
// }

// function pattern(rows) {
//   for (let i = 1; i <= rows; i++) {
//     /* Print spaces in decreasing order of row */
//     for (let j = i; j < rows; j++) {
//       console.log(" ");
//     }

//     /* Print star in increasing order or row */
//     for (j = 1; j <= i; j++) {
//       console.log("*");
//     }

//     /* Move to next line */
//     console.log("\n");
//   }
// }

// //pattern(5);

// let addNum = (a, b) => {
//   console.log("Inside Arrow Function");
//   return a + b;
// };

// let sqaure = (a) => a * a;

// console.log(addNum(4, 5));

// console.log(sqaure(25));

// console.log("Foreach loop");

// arr.forEach((e) => {
//   console.log(e);
// });

function showData() {
  setTimeout(() => {
    console.log(20);
  }, 2000);
}

function showData2() {
  console.log(21);
}
showData();
showData2();

console.log("Hello for Node ");

// function show() {
//   let txtuser = document.getElementById("txt");
//   txtuser.value = "Some value";
//   console.log(txtuser);
// }

// Regular Expression

function validateForm() {
  let tuser = document.getElementById("uname");
  let puser = document.getElementById("erroruser");
  let emid = document.getElementById("eid");
  let pemid = document.getElementById("erroremail");
  let pwd = document.getElementById("pwd");
  let epwd = document.getElementById("errorpwd");
  let cpwd = document.getElementById("cpwd");
  let ecpwd = document.getElementById("errorcpwd");

  //console.log(pwd.value.length);

  if (tuser.value == "") {
    tuser.style.border = "2px solid red";
    puser.innerHTML = "Username should not be blank";
    puser.style.color = "red";
    return false;
  } else if (emid.value == "") {
    emid.style.border = "2px solid red";
    pemid.innerHTML = "Email id cannot be blank";
    pemid.style.color = "red";
    return false;
  } else if (pwd.value == "") {
    pwd.style.border = "2px solid red";
    epwd.innerHTML = "Password cannot be blank";
    epwd.style.color = "red";
    return false;
  } else if (pwd.value.length < 6 || pwd.value.length > 20) {
    pwd.style.border = "2px solid red";
    epwd.innerHTML = "Password should be in between 6 and 20";
    epwd.style.color = "red";
    return false;
  } else if (cpwd.value == "") {
    cpwd.style.border = "2px solid red";
    ecpwd.innerHTML = "Password cannot be blank";
    ecpwd.style.color = "red";
    return false;
  }
  else if(pwd.value !== cpwd.value){
    cpwd.style.border = "2px solid red";
    ecpwd.innerHTML = "Password do not match";
    ecpwd.style.color = "red";
    return false;
  }
}

function removeStyles() {
  let tuser = document.getElementById("uname");
  let puser = document.getElementById("erroruser");
  tuser.style.border = "";
  puser.innerHTML = "";
}
