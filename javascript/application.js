// puts "Hello from Ruby"
console.log("Hello from JavaScript!");

// /////////
// The basic: forEach + using a defined arrow function
// /////////
// students.each do |param|
// end

const students = ["Gonzalo", "Yoshi", "Maria", "Paul"];
students.forEach((student) => {
  // puts student
  // console.log(student);
});

// /////////
// Iterator
// /////////
// 0. Put an H1 on the top of the page
document.body.insertAdjacentHTML("afterbegin", "<h1>Hello!</h1>");

// 1. create an ordered list and put them at the bottom of my HTML page
const otherStudents = ["Gonzalo", "Yoshi", "Maria", "Paul"];

// 1a. Building HTML with strings
let liElements = "";
otherStudents.forEach((student) => {
  // build an <li>
  liElements += `<li>${student}</li>`;
});

document.body.insertAdjacentHTML(
  "beforeend",
  `<ol class='list-group-numbered'>${liElements}</ol>`,
);

// 1b. Building HTML with elements
// ruby naming convention
// const ol_element = document.createElement("ol");
const olElement = document.createElement("ol");
olElement.classList.add("list-group-numbered");
otherStudents.forEach((student) => {
  // build an <li>
  const liElement = document.createElement("li");
  liElement.innerText = student;
  // olElement.innerHTML = liElement;
  olElement.insertAdjacentElement("beforeend", liElement);
});
document.body.insertAdjacentElement("beforeend", olElement);

// 2. Add a bootstrap list class to each student
const studentElements = document.querySelectorAll("li");
studentElements.forEach((student) => {
  // console.log(student);
  student.classList.add("list-group-item");
});

// /////////
// Data attributes -> .dataset
// a way to pass information from the HTML into the JS
// /////////
// display the role of each dev from the dataset in the <li>
const devElements = document.querySelectorAll(".dev");
devElements.forEach((dev) => {
  const role = dev.dataset.role;
  dev.innerText = `${dev.innerText} - ${role} - ${dev.dataset.batchNo}`;
  // dev.innerText += `- ${role} - ${dev.dataset.batchNo}`;
});

// /////////
// Events - click, keydown, keyup, blur, focus, scroll, mouseenter, mouseleave
// /////////
// element.addEventListenter('event_type', (event) => {
// })

// 1. Add the "selected" class when a photo is clicked
const photoElements = document.querySelectorAll(".student-img");
photoElements.forEach((photoElement) => {
  photoElement.addEventListener("click", (event) => {
    // event.currentTarget -> this is the element that triggered the event
    // console.log(event.currentTarget);
    // photoElement.classList.add('selected')
    event.currentTarget.classList.toggle("selected");
  });
});

// 2. Add the message "I was clicked" inside of the button link
const btnElement = document.querySelector("#link");
btnElement.addEventListener("click", (event) => {
  // i dont want you to do your defaut behavior
  // preventDefault -> stop from changing the page
  event.preventDefault();
  // btnElement.innerText
  event.currentTarget.innerText = "I was clicked!";
});

// 3. Code a button which selects/deselects all checkboxes of our form on click ✅
let isChecked = true;
const checkAllBtn = document.querySelector("#select-all");
const checkboxes = document.querySelectorAll(".form-check-input");
checkAllBtn.addEventListener("click", (event) => {
  checkboxes.forEach((checkbox) => {
    // checkbox.checked = !checkbox.checked;
    checkbox.checked = isChecked;
  });
  // setting the next click state
  isChecked = !isChecked;
});

// document.addEventListener("keyup", (event) => {
//   if (event.key === 'k') {

//   }
// });
