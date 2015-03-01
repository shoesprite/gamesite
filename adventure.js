 confirm("Are you ready to play?")
var money = 0
var textnode = document.createTextNode("You are an adventurer, trekking through the forest in search of monsters and treasure. ");
var textnode = document.createTextNode("Suddenly, you find a baby dragon! Dragon hide is very valuable, but the hatchling is so adorable. It stares at you with big eyes, and starts to follow you around wherever you go. It looks like you can't just walk away.")
 
var userAnswer = prompt("Do you kill the dragon hatchling and sell its hide, or keep it as a pet?")
if (userAnswer == 'keep')
{
    var textnode = document.createTextNode("You pat the the hatchling on its head. It purrs, leaving soot on your pants.")
} else {
    var textnode = document.createTextNode("You walk away from the deal with heavy pockets and a heavy heart. The dragon's eyes linger in your mind.");
    money = 100
    var userAnswerII = prompt("On the bright side, you have 100gp to spend. Would you like to buy anything?")
}
var feedback = prompt("Please rate my game out of 10.")
if (feedback > 8)
{
    var textnode = document.createTextNode("Thank you for your feedback; I'm glad you like my game!")
} else {
    var textnode = document.createTextNode("Oh. Please email me on why it was so bad in the About Me section of my website. I'm sorry the game was not worth your while.")
}
