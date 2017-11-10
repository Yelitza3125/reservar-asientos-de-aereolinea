//declarar un array que represente los asientos con false si estan vacíos.
//ocupado = true;

var airlineSeats = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
    
];

//contador que rastree el número de asientos ocupados

var busySeats = 0;

var paintSeats = function(array) {
 var containerSeat = document. getElementById('seats');

 for(var i= 0; i< array.length; i++ ) {
     var seat = document.createElement('div');
     seat.className = 'seats';

     //del primer elemento al cuarto es Primera Clase. De i = 0 a i = 3
     if(i < 4) {
         seat.style.background = 'purple';
     } else {
         seat.style.background = 'yellow';
     }
     containerSeat.appendChild(seat);
 }

};

var reserve = function() {
    var btn = document. getElementById('btn');
    btn.addEventListener('click', chooseZone);
};

var chooseZone = function() {
    var choice = prompt('¿En qué zona prefieres reservar? \n 1. Primera Clase \n 2. Económica \n \n Por favor ingresa el número de tu preferencia' );
};


paintSeats(airlineSeats);
reserve();

if (choise === 1) {
    checkFirstClassZone();
} else if(choice === 2) {
    checkEconomicZone();
} else {
    alert('Por favor ingresa un número válido');
};

var checkEconomicZone = function() {
    
}
