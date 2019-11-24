class Marker {
    constructor(make, color){ //Constructor is method and it is initilized first in a class.
        this.make = make;
        this.color= color;
    }
    write() {
        console.log(this.make);
        console.log(this.color);
    }
}

let m = new Marker('Camlin','Blue');
m.write();
