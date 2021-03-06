
$( document ).ready(function() {
//Variables
var wins = 0;
var losts = 0;
var targetNumber = getTargetnumber();
var yourTotal = 0;
var blueCrystalValue = getCrystalValue();
var greenCrystalValue = getCrystalValue();
var purpleCrystalValue = getCrystalValue();
var redCrystalValue = getCrystalValue();
// Set Game values
$('#number-wins').text(wins);
$('#number-lost').text(losts);
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
      var addWin = parseInt($('#number-wins').text());
      $('#number-wins').text(addWin+1);
      playAgain();
    }
    else{
      var addWin = parseInt($('#number-wins').text());
      $('#number-wins').text(addWin+1);
      alert("Just one more time won't hurt... We are haveing fun!");
      playAgain();
    }
  } 
  else if (yourTotal > targetNumber){
    var numberDif = (yourTotal - targetNumber);
    var lostNewGame = confirm("BUST! You went over the " + targetNumber + " target crystals by " + numberDif + " crystals. Do you want to play again?")
    if (lostNewGame == true) {
      var addLost = parseInt($('#number-lost').text());
      $('#number-lost').text(addLost+1);
      playAgain();
    }
    else{
      var addLost = parseInt($('#number-lost').text());
      $('#number-lost').text(addLost+1);
      alert("Just one more time won't hurt... We are having fun!");
      playAgain();
    }
  }
});
//End document.ready
});