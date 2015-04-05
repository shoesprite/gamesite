window.onload = function () {
  var adventure_text = document.getElementById('adventure_text')
  var yesButton = document.getElementById('yesButton')
  var noButton = document.getElementById('noButton')
  var recordSalesForm = document.getElementById('recordSalesForm')
  var adventure_text2 = document.getElementById('adventure_text2')
  var money = 0
  var dragonSold = false

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

var buyStuff = function (cost, flavorText) {
  if(money >= cost) {
    createDivAndText2(document.createTextNode(flavorText))
    money-=cost
    createDivAndText2(document.createTextNode('You now have ' + money + ' gp.'))
  } else {
    createDivAndText2(document.createTextNode('You do not have enough gold for that! You only have ' + money + ' gp.'))
  }
}

  recordSalesForm.onsubmit = function () {
    switch (getRadioCheckedValue('inventory')) {
      case 'snacks':
        buyStuff(25, 'You buy some almond-flavored pastries that are flaky and filled with butter. You pat your tummy, your hunger sated.')
        break;
      case 'figurines':
          buyStuff(50, 'You buy a stone figurine of a lion. It snarls fiercely at you, almost as if it were alive.')
          break;
      case 'lanterns':
        buyStuff(75, 'You buy a glowing lantern with')
        break;
      case 'jewelry':
        buyStuff(100, 'jewelry')
        break;
      }
    return false;
  }
  var createDivAndText = function (sometext) {
    adventure_text.appendChild(document.createElement('div').appendChild(sometext))
    adventure_text.appendChild(document.createElement("br"));
  }
   var createDivAndText2 = function (sometext) {
    adventure_text2.appendChild(document.createElement('div').appendChild(sometext))
    adventure_text2.appendChild(document.createElement("br"));
  }
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
    var textnode4 = document.createTextNode("You walk away from the deal with heavy pockets containing 100 gp, although you feel bad for the hatchling.");
    dragonSold = true
    createDivAndText(textnode4)
    money = 100
    var textnode5 = document.createTextNode("You walk into a market with lots of cool stuff. However, the only items within your budget are some snacks (25 gp), some figurines (50 gp), a few lanterns(75), and some fancy amber jewelry(100.)");
    createDivAndText(textnode5)
  if (dragonSold && money == 0) {
      var textnode6 = document.createTextNode("Having spent all your money, you decide to go home, happy with a good day of adventure! The End. ")
      createDivAndText(textnode6)
  }
  }
}
