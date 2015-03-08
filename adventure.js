window.onload = function () {
  var adventure_text = document.getElementById('adventure_text')
  var yesButton = document.getElementById('yesButton')
  var noButton = document.getElementById('noButton')

var createDivAndText = function (sometext) {
  adventure_text.appendChild(document.createElement('div').appendChild(sometext))
}
var money = 0
var textnode = document.createTextNode("You are an adventurer, trekking through the forest in search of monsters and treasure. ");
createDivAndText(textnode)
var textnode2 = document.createTextNode("Suddenly, you find a baby dragon! Dragons are a lot of work, but the hatchling is so adorable. It stares at you with big eyes, and starts to follow you around wherever you go. It looks like you can't just walk away.<br/> Suddenly, you remember that dragons are highly valued on the market for their brute strength. Do you keep it as a pet? ")
 
createDivAndText(textnode2)
yesButton.onclick = function() {
  var textnode3 = document.createTextNode("You pat the the hatchling on its head. It purrs, leaving soot on your pants.")
createDivAndText(textnode3)
} 
noButton.onclick = function() {
  var textnode4 = document.createTextNode("You walk away from the deal with heavy pockets and a heavy heart. The dragon's eyes linger in your mind.");
createDivAndText(textnode4)
money = 100
  var userAnswerII = prompt("On the bright side, you have 100gp to spend. Would you like to buy anything?")
}
//var feedback = prompt("Please rate my game out of 10.")
if (feedback > 8)
{
    var textnode5 = document.createTextNode("Thank you for your feedback; I'm glad you like my game!")
    createDivAndText(textnode5)
} else {
    var textnode6 = document.createTextNode("Oh. Please email me on why it was so bad in the About Me section of my website. I'm sorry the game was not worth your while.")
    createDivAndText(textnode6)
}
}
