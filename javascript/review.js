// // age = -2
// const age = -2;
// console.log(`My age is ${age}`);
// // puts "some string"
// // "lkasjdlaksdj #{} asdas "
// console.log(`My age is ${age}`);

// // Parsing
// // 12.to_i
// console.log(parseInt("1010", 2));

// // Array

// const beatles = ["John", "Ringo", "George", "Paul"];

// console.log(beatles[1]);

// // hash -> object
// // hash[key]
// // object.michael
// const jacksonFive = {
//   michael: 50,
//   jannet: 70,
// };

// console.log(`He died at age ${jacksonFive.michael}`);

// jacksonFive.tito = 70;

// console.log(jacksonFive);

// // If statement

// if (age >= 18) {
//   console.log("You can vote");
// } else if (age < 0) {
//   console.log("You are not even born!!");
// } else {
//   console.log("You can't vote");
// }

// // Comparison
// console.log(12 === 12);

// // Function
// // def method_name
// const add = (numOne, numTwo) => {
//   return numOne + numTwo;
// };

// const returnTwo = () => {
//   return 2;
// };

// console.log(returnTwo());

// // Live code capitalize

// const capitalize = (word) => {
//   // word = 'sebAstIan'
//   // make sure it's a string, if not error out

//   // something.class
//   if (typeof word !== "string") {
//     console.log("Hey we need a string");
//   }
//   // get the first letter
//   const firstLetter = word[0];
//   // get the rest of the string
//   const restOfTheWord = word.substring(1);
//   // upcase the letter
//   // downcase it
//   // combine them together, and return
//   return firstLetter.toUpperCase() + restOfTheWord.toLowerCase();
// };

// console.log(capitalize("hello"));
// console.log(capitalize("seBaStian"));

// console.log("Hello from js!");

// const players = document.querySelector("h1");

// // use js to insert elements
// // players.insertAdjacentHTML("beforeend", "<li>Messi</li>");
// // players.insertAdjacentHTML("beforeend", "<li>Neymar</li>");

// const messi = players.querySelector(".red");
// console.log(messi.innerText);

// // selecting multiple elements

// const countries = document.querySelectorAll("#fifa-wins li");
// console.log(countries);

// // Insert france to the list
// // select the ordered list
// const fifaWins = document.querySelector("#fifa-wins");
// // insert the element that says France (2 wins)
// fifaWins.insertAdjacentHTML("beforeend", "<li>France (2 wins)</li>");

// // lower_snake_case -> var, methods
// // lowerCamelCase
