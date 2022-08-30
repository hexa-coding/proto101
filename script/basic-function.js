// book page 89

var msg = 'Sign up to receive our newsletter for 10% off';
var msg2 = 'Give a thumb up on Facebook and get 20% off';

function updateMessage()
{
  var el = document.getElementById('liveprintarea');
  el.textContent = msg + " " + msg;
}
updateMessage();

function updateNamesList()
{
  var el2 = $('#nameslist');
  el2.text(msg2);
}
updateNamesList();