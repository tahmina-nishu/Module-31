// Jokhon onekgulo object er kichu common ar kichu uncommon properties thake tkhn Class use korte hoy;
// common gulo parent class e rakhbo ..

class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    move() {
        console.log(`${this.name} is moving.`);
    }
}

// 'Vehicle' er boishisto gulo bus e thakbe abr sathe extra kichu o thakbe... etai inheritance.
class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price); //'super' diye parent constructor er parameter gulo niye ase. egulo alada kore initialize korte hoyna
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }

    busDetails() {
        console.log(`Bus Name: ${this.name}, Seats: ${this.seat}, Ticket Price: ${this.ticketPrice}`);
    }
}

class Truck extends Vehicle{
    constructor(name, price, load){
        super(name, price); 
        this.load = load;
    }

    truckDetails() {
        console.log(`Truck Name: ${this.name}, Load Capacity: ${this.load} tons`);
    }
}

// Example usage:
const cityBus = new Bus('City Bus', 50000, 40, 15);
const freightTruck = new Truck('Freight Truck', 80000, 20);

cityBus.move(); // Output: City Bus is moving.
cityBus.busDetails(); // Output: Bus Name: City Bus, Seats: 40, Ticket Price: 15

freightTruck.move(); // Output: Freight Truck is moving.
freightTruck.truckDetails(); // Output: Truck Name: Freight Truck, Load Capacity: 20 tons