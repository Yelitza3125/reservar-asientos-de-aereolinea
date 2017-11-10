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

paintSeats(airlineSeats);