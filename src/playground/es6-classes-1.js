// Car class
// make
// model
// vin
// getDescription

class Person {
  constructor(name="Anonymous",age=0){
    this.name = name;
    this.age = age;
  }
  setAge(){
    return (this.age > 0 ? 's' :'');
  }
  getDescription(){
    return `Hi, my name is ${this.name}. I am ${this.age} year${this.setAge()} old.`;
  }

  getGreeting(){
    return `Hi my name is ${this.name}, I am ${this.age} year${this.setAge()} old.`;
  }
}

class Student extends Person {
  constructor(name,age,major){
    super(name,age);
    this.major = major;
  }

  hasMajor(){
    return !!this.major;
  }

  getDescription(){
    let description = super.getDescription();
    if(this.hasMajor()){
      description += ` My major is ${this.major}.`
    }
    return description;
  }
}

class Traveller extends Person {
  constructor(name,age, location){
    super(name, age);

    this.homeLocation = location;
  }

  hasHomeLocation(){
    return !!this.homeLocation;
  }

  getGreeting(){
    let greeting = super.getGreeting();

    if(this.hasHomeLocation()){
      greeting += ` I hail from ${this.homeLocation}.`
    }

    return greeting;
  }
}

// const me = new Student('Alan Fidelino',45, 'Computer Science');
// const anon = new Student(undefined, 25);

// console.log(me);
// console.log(me.getGreeting());
// console.log(me.getDescription())

// console.log(me.hasMajor());
// console.log(`--------------------`);
// console.log(anon);
// console.log(anon.getGreeting());
// console.log(anon.hasMajor());
// console.log(`--------------------`);

const jetSetter = new Traveller('Alan Fidelino', 45, 'Sydney, Australia');
const anonTraveller = new Traveller(undefined, undefined, 'Nowhere');
console.log(`--------------------`);
console.log(jetSetter)
console.log(jetSetter.getGreeting());
console.log(`--------------------`);
console.log(anonTraveller);
console.log(anonTraveller.getGreeting());