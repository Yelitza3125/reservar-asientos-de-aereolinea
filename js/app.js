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
 }
}

