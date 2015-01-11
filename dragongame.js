window.onload = function () {
  var slaying = true;
  var totalDamage = 0;
  button.onclick = function () {
    if (!slaying) {
// if done slaying, clear hi
      hi.innerHTML = ''
      slaying = true
    }
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var hi = document.getElementById('hi')
var button = document.getElementById('button')
  if (youHit) {
  var textnode = document.createTextNode("You hit the dragon and did " + damageThisRound + " damage!");
  hi.appendChild(textnode)
    totalDamage += damageThisRound;
    
    if (totalDamage >= 4) {
      var textnode1 = document.createTextNode(" You did it! You slew the dragon!");
      hi.appendChild(textnode1)
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
      var textnode2 = document.createTextNode(" The dragon burninates you! You're toast.");
      hi.appendChild(textnode2)
    slaying = false;
  }
}
}
