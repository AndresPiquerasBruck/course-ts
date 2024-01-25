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
  monk = new Monk('Pingo')

  thought1 = new PoliticalThought()

  classInterface1 = new classInterface1('Class with interface')

  constructor() {
    this.functionInsideClass(1, 111);
    this.mage1.battleCry();
    this.mage1.castSpellBookSpell(2);
    this.mage2.battleCry();
    this.monk.castSpellBookSpell(1);
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

interface spellBook {
  spellBookTitle: string;
  spellBookSpells: string[];
  spellBookPages: number;

  castSpellBookSpell(index: number): void;
}

class Mage implements spellBook{
  protected staff: string
  protected dmg: number
  static basicAttack: string

  spellBookTitle = "Vanilla mage Spellbook"
  spellBookSpells = ["Hocus Pockus", "Alakazam", "Articulo 155"]
  spellBookPages = 420;

  constructor(staff: string, dmg: number){
    this.staff = staff
    this.dmg = dmg
    if (!Mage.basicAttack) { Mage.basicAttack = "nieh" }
  }

  castSpellBookSpell(index: number): void {
    console.log(" DIE!!!!! " + this.spellBookSpells[index])
  }

  battleCry() {
    console.log("I'm a vanilla mage and my staff: " + this.staff + " makes " + this.dmg + " damage! BASIC ATAAAACK " + Mage.basicAttack)
  }
  
}

class Necromancer extends Mage implements spellBook {
  private readonly darkSpell: string

  constructor(staff:string, dmg:number, darkSpell: string) {
    super(staff, dmg)
    this.darkSpell = darkSpell
  }

  override battleCry() {
    console.log("I'm a dark mage and my staff: " + this.staff + " makes " + this.dmg + " damage! My dark spell is: " + this.darkSpell)
  }
}

class Monk implements spellBook {
  name: string

  spellBookTitle = "Holy Book Or Something"
  spellBookSpells = ["Ying Yang cho", "Merengue merengue"]
  spellBookPages = 10;

  constructor(name: string) {
    this.name = name
  }

  castSpellBookSpell(index: number): void {
    console.log("Unalive, my brother... " + this.spellBookSpells[index])
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

interface Interface1 {
  name: string
  method1(): void 
}

interface Interface2 {
  method2(): void
}

class classInterface1 implements Interface1, Interface2 {
  name: string

  constructor(name: string) {
    this.name = name;
  }

  method1(): void {
    console.log("Interface test method1: " + this.name)
  }

  method2(): void {
    console.log("Interface test method2: " + this.name)
  }
}