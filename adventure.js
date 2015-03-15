window.onload = function () {
  var adventure_text = document.getElementById('adventure_text')
  var yesButton = document.getElementById('yesButton')
  var noButton = document.getElementById('noButton')
  var recordSalesForm = document.getElementById('recordSalesForm')

  function getRadioCheckedValue(radio_name) {
   var oRadio = document.forms[0].elements[radio_name];
   for(var i = 0; i < oRadio.length; i++)
   {
      if(oRadio[i].checked)
      {
         return oRadio[i].value;
      }
   }
 
   return '';
}

  recordSalesForm.onsubmit = function () {
    switch (getRadioCheckedValue('inventory')) {
      case 'snack':
        var textnode6 = document.createTextNode('You buy some almond-flavored pastries that are flaky and filled with butter. You pat your tummy, your hunger sated.')
        createDivAndText(textnode6)
        money-=25
        break;
      case 'figurines':
        var textnode7 = document.createTextNode('You buy a stone figurine of a lion. It snarls fiercely at you, almost as if it were alive.')
        createDivAndText(textnode7)
        money-=50
        break;
      case 'lanterns':
        var textnode8 = document.createTextNode('You go over to ')
        break;
      case 'jewelry':
        money-=100
        break;
      }
    return false;
  }
  var createDivAndText = function (sometext) {
    adventure_text.appendChild(document.createElement('div').appendChild(sometext))
    adventure_text.appendChild(document.createElement("br"));
  }
  var money = 0
  var textnode = document.createTextNode("You are an adventurer, trekking through the forest in search of monsters and treasure. ");
  createDivAndText(textnode)
  var textnode2 = document.createTextNode("Suddenly, you find a baby dragon! Dragons are a lot of work, but the hatchling is so adorable. It stares at you with big eyes, and starts to follow you around wherever you go. It looks like you can't just walk away.")
  textnode2a = document.createTextNode("Suddenly, you remember that dragons are highly valued on the market for their brute strength. Do you keep it as a pet? ")
  createDivAndText(textnode2)
  createDivAndText(textnode2a)
  yesButton.onclick = function() {
    var textnode3 = document.createTextNode("You pat the the hatchling on its head. It purrs, leaving soot on your pants.")
  createDivAndText(textnode3)
  } 
  noButton.onclick = function() {
    var textnode4 = document.createTextNode("You walk away from the deal with heavy pockets and a heavy heart. The dragon's eyes linger in your mind.");
    createDivAndText(textnode4)
    money = 100
    var userAnswerII = prompt("On the bright side, you have 100gp to spend. Would you like to buy anything?")
    if (userAnswerII === yes) {
      var textnode5 = document.createTextNode("You walk into a market with lots of cool stuff. However, the only items within your budget are some snacks (25 gp), some figurines (50 gp), a few lanterns(75), and some fancy amber jewelry(100.)");
      createDivAndText(textnode5)
    }
  }
}
