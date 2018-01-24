import { Component, OnInit } from '@angular/core';
const c = console.log


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  constructor() {


    // class Animal {
    //   _move(distanceInMeters: number = 0) {
    //     console.log(`Animal moved ${distanceInMeters}m.`);
    //   }
    // }

    // class Human extends Animal {

    //   private barcode: number = 112;
    //   public name: string;
    //   protected age: number = 36;

    //   constructor(
    //     public surname: string,
    //     name: string,
    //   ) {
    //     super()
    //     this.name = name;
    //   }

    //   private logBarcode() {
    //     console.log("logBarcode: ", this.barcode);
    //   }

    //   printName() { console.log("printName: ", this.surname + ' ' + this.name) }
    // }

    // class Girl extends Human {
    //   private fantasies: string = "sex"
    //   //protected fantasies: string = "sex"
    //   underwear: string = "none"
    //   hasPeriod() { c("name: " + this.name) }
    // }

    // class Hayleywilliams extends Girl {

    //   constructor() {
    //     super('1','2')
    //     this.underwear = "dolce and gabbana"
    //   }
    //   sings() {}
    //   fantasies2: string = this.fantasies + " big cock"
    // }


    // let human = new Hayleywilliams()

    // c(human)

    // let test = new Girl("1", "2")
    // c(test)

    // class Dog extends Animal {
    //   bark() {
    //     console.log('Woof! Woof!');
    //   }
    // }

    // const dog = new Dog();
    // dog.bark();
    // dog._move(10);
    // dog.bark();

    // const person = new Human("Kong", "King");
    // person.printName();

    // class extendedPerson extends Human {
    //   constructor(surname: string) {
    //     super("Max", surname);
    //     this.age = 31;
    //   }
    // }


    // const mm = new extendedPerson('Mad');
    // mm.printName(); // inherhits method but with different surname
    // mm.logBarcode();

    // // Getter & Setters
    // // User getter or setter methods to modify private variables;
    // class Plant {
    //   private speciesName: string;

    //   get species() {
    //     return this.speciesName;
    //   }

    //   set species(value: string) {
    //     if (value.length > 3) {
    //       this.speciesName = value;
    //     } else {
    //       this.speciesName = 'Unknown Plant';
    //     }
    //   }

    // }

    // let rose = new Plant();
    // rose.species = 'Flower';
    // console.log(rose.species);

    // // Static Methods
    // class Helpers {
    //   static PI: number = 3.14; // static keyword makes property accessible outside of class without having to instantiate new class
    //   static calcCircumference(diameter: number): number {
    //     return this.PI * diameter;
    //   }
    // }

    // console.log(2 * Helpers.PI);
    // console.log(Helpers.calcCircumference(25));

    // // Abstract Classes for inheritance only; never needs to be instantiated for setting a base class that all other extended classes will inherit from

    // abstract class patientModel {
    //   first_name: string;
    //   last_name: string;
    //   hasCoverage: boolean;
    //   private insurer: string;

    //   constructor(first_name: string, last_name: string) {
    //     this.first_name = first_name;
    //     this.last_name = last_name;
    //   }

    //   getFullName(): string {
    //     return this.first_name + ' ' + this.last_name;
    //   }

    //   get insurance() {
    //     return this.insurer;
    //   }

    //   set insurance(carrier: string) {
    //     if (carrier === 'Aetna' || carrier === 'Horizon') {
    //       this.insurer = carrier;
    //       this.hasCoverage = true;
    //     } else {
    //       this.insurer = 'None';
    //       this.hasCoverage = false;
    //     }
    //   }

    // }


    // class patient extends patientModel {
    //   getTreatment(condition: string): void {
    //     if (this.hasCoverage === false) {
    //       console.log("Sorry you\'re not covered by any of our accepted HMO plans.");
    //     } else {
    //       let patientName = this.getFullName();
    //       console.log(patientName + ' is being treated for ' + condition);
    //       console.log('HMO is ' + this.insurer);
    //     }
    //   }
    // }

    // let newPatient = new patient('James', 'Dolan');
    // newPatient.insurance = 'Aetna';
    // newPatient.getTreatment('Heart Attack');


  }





  ngOnInit() {}

}
