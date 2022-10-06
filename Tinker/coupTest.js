// function runOnInstructions(func, ...keys) {
//   document.getElementsByClassName('instructions')[0].style.display = 'none';
//   document.getElementsByClassName('start')[0].style.display = 'none';
//   document.

//   document.getElementsByClassName('coup')[0].addEventListener('click', function(event) {
//       for (let key of keys) {
//           if (!pressed.has(key)) {
//               return;
//           }
//       }
//       pressed.clear();

//       func();
//   });
// }

// runOnInstructions(
//   () => alert("Hello!"),
//   "KeyQ",
//   "KeyW"
// );

function setInstructions() {
  // Output Instructions
  const inputElement = document.getElementsByClassName("coup");
  const outputElement = 'How to Play Coup';
  console.log(document.getElementsByClassName('coup')[0].innerHTML)
  inputElement[0].innerHTML = outputElement;
  
  // Clear Home Buttons
  document.getElementsByClassName('instructions')[0].style.display = 'none';
  document.getElementsByClassName('start')[0].style.display = 'none';
  
  // Add a Return Button
  var newButton = document.createElement('input');
  newButton.type = "button";
  newButton.id = 'return'
  newButton.value = 'Return';
  newButton.addEventListener('click', function(event){
    document.getElementsByClassName('instructions')[0].style.display = 'block';
    document.getElementsByClassName('start')[0].style.display = 'block';
    
  })
  var returnElement = document.getElementsByClassName('home')[0];
  returnElement.appendChild(newButton);
}