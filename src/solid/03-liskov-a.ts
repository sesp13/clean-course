import {
  Audi,
  Ford,
  Honda,
  Tesla,
  Toyota,
  Vehicle,
  Volvo,
} from './03-liskov-b';

(() => {
  const printCarSeats = (cars: Vehicle[]) => {
    // Using open and close principle
    cars.forEach((car: Vehicle) => {
      console.log(car.constructor.name, car.getNumberOfSeats());
    });

    // NO Open and close principle

    // for (const car of cars) {

    //     if( car instanceof Tesla ) {
    //         console.log( 'Tesla', car.getNumberOfSeats() )
    //         continue;
    //     }
    //     if( car instanceof Audi ) {
    //         console.log( 'Audi', car.getNumberOfSeats() )
    //         continue;
    //     }
    //     if( car instanceof Toyota ) {
    //         console.log( 'Toyota', car.getNumberOfSeats() )
    //         continue;
    //     }
    //     if( car instanceof Honda ) {
    //         console.log( 'Honda', car.getNumberOfSeats() )
    //         continue;
    //     }
    //     if( car instanceof Volvo ) {
    //         console.log( 'Honda', car.getNumberOfSeats() )
    //         continue;
    //     }

    // }
  };

  const cars = [
    new Tesla(7),
    new Audi(2),
    new Toyota(5),
    new Honda(5),
    new Volvo(2),
    new Ford(9),
  ];

  printCarSeats(cars);
})();
