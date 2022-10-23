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
// import "./gameRunner";
import  player from "../playerClass.js";
import { deck } from "../deckClass.js";
import { card } from "../cardClass.js";


let initialDeck = new deck();
initialDeck.deck();

function clearHomeButtons() {
  // Clear Home Buttons
  document.getElementsByClassName('instructions')[0].style.display = 'none';
  document.getElementsByClassName('start')[0].style.display = 'none';
}

function addReturnButton() {
    // Add a Return Button
    var returnElement = document.getElementsByClassName('home')[0];
    var newButton = document.createElement('input');
    newButton.type = "button";
    newButton.id = 'return'
    newButton.value = 'Return';
    newButton.addEventListener('click', function(event){
      document.getElementsByClassName('instructions')[0].style.display = 'inline';
      document.getElementsByClassName('start')[0].style.display = 'inline';
      document.getElementsByClassName('coup')[0].innerHTML = "Would you like to start?";
      document.getElementsByClassName('cards')[0].innerHTML = "";
      document.getElementsByClassName('opponentsCards')[0].innerHTML = "";
      returnElement.removeChild(newButton);
    })
    returnElement.appendChild(newButton);
}

function addRevealButton(card2, card4) {
    // Add a Reveal Button
    let revealElement = document.getElementsByClassName('home')[0];
    let newButton = document.createElement('input');
    newButton.type= "button";
    newButton.id = 'reveal'
    newButton.value = 'Reveal';
    newButton.addEventListener('click', function(event){
      document.getElementsByClassName('opponentsCards')[0].innerHTML= `Your Opponents cards were ${card2.name} and ${card4.name}`;
      revealElement.removeChild(newButton);
   })
   revealElement.appendChild(newButton);
}

function runGame() {
  console.log("hello I work");
  clearHomeButtons();
  addReturnButton();

  let gameDeck = initialDeck.shuffle();
  
  // Player Cards
  let card1 = new card();
  card1.card(gameDeck[0]);
  
  let card2 = new card();
  card2.card(gameDeck[3]);
  document.getElementsByClassName('cards')[0].innerHTML= "Welcome to Coup" + "<br>" + "your cards are " + `${card1.name} and ${card2.name}`;

  // Opponent Cards
  let card3 = new card();
  card3.card(gameDeck[2]);
  
  let card4 = new card();
  card4.card(gameDeck[4]);
  addRevealButton(card2, card4);
}
function setInstructions() {
  // Output Instructions
  const inputElement = document.getElementsByClassName("coup");
  const outputElement = "<h1>How to Play Coup:</h1>" + "<br>" +
  "<p class=\"para\">In the not too distant future, the government is run for profit by a new \"royal class\" of multinational CEOs." + "<br>" +
  "Their greed and absolute control of the economy has reduced all but a privileged few to lives of poverty and desperation." + "<br>" +
  "Out of the oppressed masses rose The Resistance, an underground organization focused on overthrowing these powerful rulers. The valiant efforts of" + "<br>" +
  "The Resistance have created discord, intrigue, and weakness in the political courts of the noveau royal, bringing the government to brink of collapse." + "<br>" +
  "But for you, a powerful government official, this is your opportunity to manipulate, bribe and bluff your way into absolute power." + "<br>" +
  "To be successful, you must destroy the influence of your rivals and drive them into exile." + "<br>" +
  "In these turbulent times there is only room for one to survive.;" + "<br>" +
  "<h2>Setup</h2>" + "<br>" +
  "<p class=\"para\">Shuffle all the character cards and deal 2 to each player. Players can always look at their cards but must keep them face down in front of them." + "<br>" +
  "Place the remaining cards in the middle of the play area as the Court deck." + "<br>" +
  "Give each player 2 coins. Each player's money must be kept visible. Place the remaining coins in the middle of the play area as the Treasury." + "<br>" +
  "Give one summary card to each player. This is for reference only. Players should familiarize themselves with all the actions and characters before starting the game." + "<br>" +
  "The person who won the last game starts.</p>" + "<br>" +
  "<h2>Influence</h2>" + "<br>" +
  "<p class=\"para\">Facedown cards in front of a player represent who they influence at court. The characters printed on their face down cards represents which characters that player influences and their abilities." + "<br>" +
  "Every time a player loses an influence they have to turn over and reveal one of their face down cards. Revealed cards remain face up in front of the player visible to everyone and no longer provide influence for the player." + "<br>" +
  "Each player always chooses which of their own cards they wish to reveal when they lose an influence." + "<br>" +  
  "When a player has lost all their influence they are exiled and out of the game.</p>" + "<br>" +  
  "<h2>Game Play</h2>" + "<br>" +
  "<p class=\"para\">The game is played in turns in clockwise order. Each turn a player chooses one action only. A player may not pass." + "<br>" +
  "After the action is chosen other players have an opportunity to challenge or counteract that action." + "<br>" +
  "If an action is not challenged or counteracted, the action automatically succeeds. Challenges are resolved first before any action or counteraction is resolved." + "<br>" +
  "When a player has lost all their influence and both their cards are face up in front of them, they are immediately out of the game. They leave their cards face up and return all their coins to the Treasury." + "<br>" +
  "The game ends when there is only one player left.</p>" + "<br>" +
  "<h2>Actions</h2>" + "<br>" +
  "<p class=\"para\">A player may choose any action they want and can afford. Some actions (Character Actions) require influencing characters." + "<br>" +
  "If they choose a Character Action a player must claim that the required character is one of their face down cards. They can be telling the truth or bluffing. They do not need to reveal any of their face down cards unless they are challenged. If they are not challenged they automatically succeed." + "<br>" +
  "If a player starts their turn with 10 (or more) coins they must launch a Coup that turn as their only action.</p>";
  console.log(document.getElementsByClassName('coup')[0].innerHTML)
  inputElement[0].innerHTML = outputElement;
  
  clearHomeButtons();
  addReturnButton();

}

function addListeners() {
  document.getElementsByClassName('instructions')[0].addEventListener('click', setInstructions);
  document.getElementsByClassName('start')[0].addEventListener('click', runGame);
}
addListeners();