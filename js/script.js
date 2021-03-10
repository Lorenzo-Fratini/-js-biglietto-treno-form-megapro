var generateBtn = document.getElementById('generate');
var cancelBtn = document.getElementById('cancel');

var passenger = document.getElementById('passenger');
var offer = document.getElementById('offer');
var carriage = document.getElementById('carriage');
var clientCode = document.getElementById('client');
var finalPrice = document.getElementById('finalPrice');

var userAge = '';

generateBtn.addEventListener('click', function(){
  var name = document.getElementById('name').value;
  var km = document.getElementById('km').value;
  var age = document.getElementById('age').value;

  var price = km * 0.21;

  if (name && km && age){

    if (age == 1){
      price = (price / 5) * 4;
      userAge = 'offerta per minorenni';
    } else if (age == 3){
      price = (price / 5) * 3;
      userAge = 'Offerta per over 65';
    } else {
      userAge = 'Offerta per maggiorenni';
    }

    var carriageRnd = Math.floor(Math.random() * 10) + 1;
    var codeRnd = Math.floor(Math.random() * 10000) + 90000;

    passenger.innerHTML = name;
    offer.innerHTML = userAge;
    carriage.innerHTML = carriageRnd;
    clientCode.innerHTML = codeRnd;
    finalPrice.innerHTML = price.toFixed(2) + ' €';

  } else {
    alert('Dati incompleti');
    passenger.innerHTML = '';
    offer.innerHTML = '';
    carriage.innerHTML = '';
    clientCode.innerHTML = '';
    finalPrice.innerHTML = '';
  }

});

cancelBtn.addEventListener('click', function(){

  document.getElementById('name').value = '';
  document.getElementById('km').value = '';
  document.getElementById('age').value = '';

  passenger.innerHTML = '';
  offer.innerHTML = '';
  carriage.innerHTML = '';
  clientCode.innerHTML = '';
  finalPrice.innerHTML = '';

});
