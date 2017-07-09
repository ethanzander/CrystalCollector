
$( document ).ready(function() {
//Variables
var targetNumber = getTargetnumber();
var yourTotal = 0;
var blueCrystalValue = getCrystalValue();
var greenCrystalValue = getCrystalValue();
var purpleCrystalValue = getCrystalValue();
var redCrystalValue = getCrystalValue();
// Set Game values
$('#target-number').text(targetNumber);
$('#your-total').text(yourTotal);
$('#blue-crystal').val(blueCrystalValue);
$('#green-crystal').val(greenCrystalValue);
$('#purple-crystal').val(purpleCrystalValue);
$('#red-crystal').val(redCrystalValue);
//Set all Functions
function getTargetnumber(min, max) {
  min = Math.ceil(19);
  max = Math.floor(120);
  return Math.floor(Math.random() * (max - min)) + min;
}
function getCrystalValue(min, max) {
  min = Math.ceil(1);
  max = Math.floor(12);
  return Math.floor(Math.random() * (max - min)) + min; 
}
function playAgain(){
  //Reset game variables
  targetNumber = getTargetnumber();
  yourTotal = 0;
  blueCrystalValue = getCrystalValue();
  greenCrystalValue = getCrystalValue();
  purpleCrystalValue = getCrystalValue();
  redCrystalValue = getCrystalValue();
  // Reset Game values
  $('#target-number').text(targetNumber);
  $('#your-total').text(yourTotal);
  $('#blue-crystal').val(blueCrystalValue);
  $('#green-crystal').val(greenCrystalValue);
  $('#purple-crystal').val(purpleCrystalValue);
  $('#red-crystal').val(redCrystalValue);
}
// Game logic
$('.crystal-image').on('click', function(){
  var crystalValue = ($(this).attr('value'));
  crystalValue = parseInt(crystalValue);
  yourTotal = (yourTotal + crystalValue);
  $('#your-total').text(yourTotal);
  if (yourTotal == targetNumber) {
    var winNewGame = confirm("You win! Your crystals equal " + targetNumber + ". Do you want to play again?")
    if (winNewGame == true) {
      playAgain();
    }

  } 
  else if (yourTotal > targetNumber){
    var lostNewGame = confirm("BUST! You went over " + targetNumber +". Do you want to play again")
    if (lostNewGame == true) {
      playAgain();
    }
  }
});
//End document.ready
});