class Engine {
    start() {
        System.out.println("Engine starts.");
    }
}

class Car {

    Car() {
        this.engine = new Engine(); // Car "has-a" Engine 
    }

    startCar() {
        engine.start(); // Using Engine's method
        System.out.println("Car starts.");
    }
}

const myCar = new Car();
myCar.startCar(); // Calls start() from Engine
