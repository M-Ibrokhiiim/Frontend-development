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

class Parent{
    constructor(brand,color){
        this.brand=brand
        this.color=color
    }
   
    on(){
        console.log(`Brand:${this.brand};   Color:${this.color}`)
    }
}



class Child extends Parent{
    constructor(brand,color,speed){
        super(brand,color)
        this.speed=speed
    }

    run(){
        console.log(`${this.brand} motorbike can run at ${this.speed} km/s and ${this.color} fire shows from back turbo tube`);
    }
}

const child=new Child("Yamaha","Red",1000) 

child.on()

child.run()





// Task 1

class BankAccount{
    constructor(accountHolder,balance,withdrawalMoney){

        this.accountHolder=accountHolder
        this.balance=balance
        this.withdrawalMoney=withdrawalMoney

    }
    deposit(){
        console.log(`This card is ${this.accountHolder} of card.Balance is $${this.balance}`);
    }

    withdraw(){
        console.log(`Withdrawal money :$${this.withdrawalMoney}`);
    }
    checkBalance(){
        console.log(`Available balance:$${this.balance-this.withdrawalMoney}`);
    }
}

const bankAccount=new BankAccount("M_Ibrokhiim",1000,200)

bankAccount.deposit()
bankAccount.withdraw()
bankAccount.checkBalance()


// Task 2

class CoffeeMachine{
    constructor(coffeeType,waterLevel,cofeeBeans){
        this.coffeeType=coffeeType
        this.waterLevel=waterLevel
        this.cofeeBeans=cofeeBeans
    }

    #brewCoffee(){
        console.log('Coffee is brewing...') ;
    }

    addWater(){
        console.log(`Adding ${this.waterLevel}ml water to cup...`);
    }
    addCoffeeBeans(){
        console.log(`This ${this.cofeeBeans} type of beans are adding...`);
    }
    makeCoffee(){
        this.#brewCoffee()
        console.log(`Coffee ready !`);
    }
}

const cofeeMaking=new CoffeeMachine("Americano",250,"black")

cofeeMaking.addWater()
cofeeMaking.addCoffeeBeans()
cofeeMaking.makeCoffee()


// Task 3


class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }

    introduce(){
        console.log(`Hello! I am ${this.name} and I am in ${this.age}`);
    }
}

class Student extends Person{
    constructor(name,age,grade){
        super(name,age)
        this.grade=grade
    }

    study(){
        console.log(`Hello! I am ${this.name} and I am in ${this.age}. I am at ${this.grade} class`);
    }
}

class Teacher extends Person{
    constructor(name,age,grade,subject){
        super(name,age)
        this.grade=grade
        this.subject=subject
    }

    teach(){
        console.log(`Hello! I am ${this.name} and I am in ${this.age}. I am at ${this.grade} class.My teacher has been teaching to me ${this.subject}`);
    }
}




const student=new Student("Shokhrukh",15,7)

student.study()

const teacher=new Teacher("Shokhrukh",15,)

teacher.teach()


class Home{
    constructor(location,rooms){
        this.location=location
        this.rooms=rooms
    }

    findWay(){
        let a=this.location+''+'going from that place'
        console.log(a);
    }
}

const locations=new Home('Chilonzor 24 square')
locations.findWay()

class Person2{
    constructor(name,age){
        this.name=name
        this.age=age
    }

    introduce(){
        let a=`Hello my name is ${this.name} and I am in ${this.age}`
        console.log(a);
        return a
    }


}

const person2=new Person2("Ibrokhim",20)

person2.introduce()


class Animal{
    constructor(name,sound){
        this.name=name
        this.sound=sound
    }

    makeSound(){
        let sound=`${this.name} is get sound like ${this.sound}`
        console.log(sound);
        
        return sound
    }
}

class Cat extends Animal{
    constructor(name,sound){
        super(name,sound)
    }
}

const cat=new Cat('Cat','Meow,Meow')

cat.makeSound()


class Carr{
    constructor(brand,model,year){
        this.brand=brand
        this.model=model
        this.year=year
    }


    getCarInfo(){
        const info=`This is ${this.brand} car with model ${this.model} as well as manfactured in ${this.year}`
        console.log(info);
        return info
    }

    static compare(){
         if(carr1.year>carr2.year){
            console.log(`This ${carr1.name} is newer`);
            
         }else if(carr2.year>carr1.year){
            console.log(`This ${carr2.name} is newer`);
         }
    }

}

const carr1=new Carr("Toyoto", "corola", 2009)
const carr2=new Carr("Toyota",'land cruise',2025)

carr1.getCarInfo()
