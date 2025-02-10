console.log('OOP');
class Car{
    constructor(brand,year,color){
        this.brand=brand;
        this.year=year;
        this.color=color
    }

    drive(){
        console.log(`${this.brand} is driving...`);
    }
    checkAbout(){
        console.log(`This ${this.brand} is manufactured in ${this.year} as well as in ${this.color} color!`);
    }

}

// Inheritence

class BMW extends Car{
    constructor(brand,year,color,age,speed){
        super(brand,year,color);
        this.brand='BMW'
        this.age=age
        this.speed=speed
    }

    aboutBWM(){
       console.log(`${this.brand} car is manufactured in ${this.year} and in ${this.color}. It means ${this.brand} in ${this.age} age with maximal ${this.speed}`);
    }

}

const bmw=new BMW("BMW",2025,"Black",1,410)

bmw.aboutBWM()



const car=new Car("Mercedes")



car.drive()
car.checkAbout()


// Polymorphysm


class BoomBox{
    constructor(brand,year){
        this.brand=brand
        this.year=year
    }

    turnOn(){
        console.log(`${this.brand} is turn on`);
    }
}

const boombox=new BoomBox("JBL",2024)


boombox.turnOn()


class JBL extends BoomBox{
    turnOn(){
        console.log('WOWO');
        
    }
}


const jbl=new JBL()

jbl.turnOn()



// Encapsulation,Abstraction,Inheretence