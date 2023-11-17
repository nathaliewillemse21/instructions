// function greeting() {
//   // Document
//   document.write('Hello There')
//   // Console
  
//   // label with an id of output
//   document.getElementById('#heading').textContent = 'Javascript';
// };
// document.querySelector('#heading').textContent = 'Javascript';
// // function displayName() {
//   document.getElementById('#heading').innerText = 'Javascript';
// }
// console.log('heading')
// let text = document.querySelector('.paragraph');
// text.addEventListener('click', () => {
//   document.querySelector('p').textContent =
//     'This is a language I have mastered and I am proud of myself. I complished this because I believed in myself';
// });
const element = document.createElement("Javascript");
element.id = "heading";
const el = document.getElementById("heading"); // el will be null!
console.log(element)