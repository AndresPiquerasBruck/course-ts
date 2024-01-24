import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  stringValue = 'String';
  numberValue = 69;
  booleanValue = true;
  person = person;
  array = array;
  tupla = [this.stringValue, this.numberValue, this.array]; 
  any: any = this.stringValue;
  union: string | number = 120
  party: Party = {healer: 'Tonacho', barbarian: 'Secuestrador1', mage: 'Secuestrador2', monk: 'Secuestrador3'}
  enum = Enum.ENUM3

  functionInsideClass: (x: number, y: number) => void = function1;

  mage1 = new Mage('Varita tocapelotitas', 5)
  mage2 = new Necromancer('Varita malardita', 4, 'morite gordo')

  thought1 = new PoliticalThought()

  constructor() {
    this.functionInsideClass(1, 111);
    this.mage1.battleCry();
    this.mage2.battleCry();
    this.thought1.thoughtThought();
  }
}

function function1(number1: number, number2:number) {
  console.log('merengue merengue' + number1 + " " + number2)
}

let person = {
  name: 'Spaghetti',
  surname: 'Tororerino'
}

let array = [1, 2, 3]

type Party = {
  healer: string;
  barbarian: string;
  mage: string;
  monk: string;
}

enum Enum {
  ENUM1 = 1,
  ENUM2 = 2,
  ENUM3 = 99
}

class Mage {
  protected staff: string
  protected dmg: number
  static basicAttack: string

  constructor(staff: string, dmg: number){
    this.staff = staff
    this.dmg = dmg
    if (!Mage.basicAttack) { Mage.basicAttack = "nieh" }
  }

  battleCry() {
    console.log("I'm a vanilla mage and my staff: " + this.staff + " makes " + this.dmg + " damage! BASIC ATAAAACK " + Mage.basicAttack)
  }
  
}

class Necromancer extends Mage {
  private readonly darkSpell: string

  constructor(staff:string, dmg:number, darkSpell: string) {
    super(staff, dmg)
    this.darkSpell = darkSpell
  }

  override battleCry() {
    console.log("I'm a dark mage and my staff: " + this.staff + " makes " + this.dmg + " damage! My dark spell is: " + this.darkSpell)
  }
}

abstract class Thought {
  constructor() {
    console.log("Im thinking about a thought")
  }

  abstract thoughtThought(): void
}

class PoliticalThought extends Thought {
  constructor() {
    super()
  }
  
  thoughtThought():void {
    console.log("The thought I'm thinking is inapropriate for work, for it is a thought about political matters.")
  }
}

