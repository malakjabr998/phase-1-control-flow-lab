function scuberGreetingForFeet(distance){
  let charge 
  if (distance<400) { 
    charge = 'This one is on me!'
    return charge
  } else if ( distance<2000 && distance>=400){
    charge = 'That will be twenty bucks.'
    return charge
  } else if ( distance>=2000 && distance<2500) {
    charge= 'I will gladly take your thirty bucks.'
    return charge
  } else if (distance>=2500) {
    charge = 'No can do.'
    return charge
  }
}

function ternaryCheckCity(city){
  let destination 
  if ( city === "NYC") {
    destination = "Ok, sounds good."
    return destination
  } else {
    destination ="No go."
    return destination
  }
  
}

function switchOnCharmFromTip( tip){
  let respond 
  if ( tip === "generous" ) {
    respond = "Thank you so much."
    return respond
  } else if ( tip === "not as generous") {
    respond = "Thank you."
    return respond
  } else {
    respond = "Bye."
    return respond
  }
  // Write your code here!
}