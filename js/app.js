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

var checFirstClassZone = function() {
    var zone = 'Primera Clase';
    //recorre del elemento 0 al 3 y verifica su disponibilidad
    for(var index= 0; index < 4; index++) {
        if(airlineSeats[index] == false) {
            airlineSeats[index] = true;
      //una vez reservado el asiento ya no se recorre el array
            break;
        } else if(index == 3 && airlineSeats[index] == true) {
            reasignEconomicZone(zone);
        }
    }
};

var checkEconomicZone = function() {
    var zone = 'Económica';
    for(var index = 4; index < 10; index++) {
        if(airlineSeats[index] == false) {
            airlineSeats = true;
            break;
        } else if(index == 9 && airlineSeats[index] == true) {
            reasignFirstClassZone(zone);
        }
    }
};

var reasignEconomicZone = function(zone) {
 var reasign = confirm('Ya no quedan asientos disponibles en ' + zone + ' \n ¿Quisiera reservar en zona Económica?');
};

if(reasing == true) {
    checkEconomicZone();
} else {
    nextFlight();
};

var reasignFirstClassZone = function(zone) {
 var reasing = confirm('Ya no quedan asientos en ' + zone + ' \n ¿Quieres reservar en Primera Clase');
 if(reasing == true) {
     checkEconomicZone();
 } else {
     nextFlight();
 }
};
