import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  stringValue = 'String';
  numberValue = 69;
  booleanValue = true;
  person = person;
  array = array;
  tupla = [this.stringValue, this.numberValue, this.array];
  any: any = this.stringValue;
  union: string | number = 120;
  party: Party = {
    healer: 'Tonacho',
    barbarian: 'Secuestrador1',
    mage: 'Secuestrador2',
    monk: 'Secuestrador3',
  };
  enum = Enum.ENUM3;
  numberArray = [54325, 2345456, 54676856845672543, 21475];
  stringArray = ['sgsghst', 'grsgsrgsr', 'rghsgh', 'sfefes'];
  randomGuy1: randomGuy<any> | undefined;

  thought1 = new PoliticalThought();
  mage1 = new Mage('Varita tocapelotitas', 5);
  mage2 = new Necromancer('Varita malardita', 4, 'morite gordo');
  monk1 = new Monk('Amador Rivas');
  prova1 = new decorated('decorated1');

  casting() {
    let value: any = "Hello, TypeScript!";
    let length: number = (value as string).length;
    
    console.log(length); // Output: 18
  }

  constructor() {
    const randomNumber = Math.round(Math.random());
    this.thought1.thoughtThought();
    this.mage1.isOnCd();
    this.mage1.battleCry();
    this.mage1.castSpellBookSpell(2);
    this.mage2.battleCry();
    this.monk1.castSpellBookSpell(1);
    if (randomNumber == 0) {
      this.randomGuy1 = new randomGuy('qwer', this.stringArray);
    } else {
      this.randomGuy1 = new randomGuy('qwer', this.numberArray);
    }
    this.randomGuy1.randomAttack(3);
    console.log(readOnlyPerson);
    printMileage(null);
  }
}

let person = {
  name: 'Spaghetti',
  surname: 'Tororerino',
};

let array = [1, 2, 3];

type Party = {
  healer: string;
  barbarian: string;
  mage: string;
  monk: string;
};

enum Enum {
  ENUM1 = 1,
  ENUM2 = 2,
  ENUM3 = 99,
}

interface spellBook {
  spellBookTitle: string;
  spellBookSpells: string[];
  spellBookPages: number;

  castSpellBookSpell(index: number): void;
}

@withMana
class Mage implements spellBook {
  protected staff: string;
  protected dmg: number;
  static basicAttack: string;
  mana: number;

  spellBookTitle = 'Vanilla mage Spellbook';
  spellBookSpells = ['Hocus Pockus', 'Alakazam', 'Articulo 155'];
  spellBookPages = 420;

  constructor(staff: string, dmg: number) {
    this.mana = 0;
    this.staff = staff;
    this.dmg = dmg;
    if (!Mage.basicAttack) {
      Mage.basicAttack = 'nieh';
    }
  }

  castSpellBookSpell(index: number): void {
    console.log(
      ' DIE!!!!! ' +
        this.spellBookSpells[index] +
        '. This method is called by an interface implemented by the class mage by the way'
    );
  }

  battleCry() {
    console.log(
      "I'm a vanilla mage and my staff: " +
        this.staff +
        ' makes ' +
        this.dmg +
        ' damage! BASIC ATAAAACK ' +
        Mage.basicAttack +
        '. This is the parent class of Necromancer by the way'
    );
  }

  
  isOnCd() {
    console.log("My mana is still 0")
    return this.mana == 0
  }
}

class Necromancer extends Mage implements spellBook {
  private readonly darkSpell: string;

  constructor(staff: string, dmg: number, darkSpell: string) {
    super(staff, dmg);
    this.darkSpell = darkSpell;
  }

  override battleCry() {
    console.log(
      "I'm a dark mage, a NECROMANCER and my staff: " +
        this.staff +
        ' makes ' +
        this.dmg +
        ' damage! My dark spell is: ' +
        this.darkSpell +
        '. This is a method overrided by a child class. Its parent is mage by the way'
    );
  }
}

class Monk implements spellBook {
  name: string;

  spellBookTitle = 'Holy Book Or Something';
  spellBookSpells = ['Ying Yang cho', 'Merengue merengue'];
  spellBookPages = 10;

  constructor(name: string) {
    this.name = name;
  }

  castSpellBookSpell(index: number): void {
    console.log(
      'Unalive, my brother... ' +
        this.spellBookSpells[index] +
        '. This method is called by an interface implemented by the class Monk by the way'
    );
  }
}

class randomGuy<T> {
  name: string;
  spells: T[];

  constructor(name: string, spells: T[]) {
    this.name = name;
    this.spells = spells;
  }

  randomAttack(index: number) {
    console.log(
      "I'm a random guy muahahaha. DIE! 236784T23VI23: " +
        this.spells[index] +
        '. This method is called by a generic class (Typename T in c++) by the way'
    );
  }
}

abstract class Thought {
  constructor() {
    console.log(
      'Im thinking about a thought. This is an abstract class by the way'
    );
  }

  abstract thoughtThought(): void;
}

class PoliticalThought extends Thought {
  constructor() {
    super();
  }

  thoughtThought(): void {
    console.log(
      "The thought I'm thinking is inapropriate for work, for it is a thought about political matters. This is class that extends from an abstract class by the way"
    );
  }
}

function myDecorator(target: any, propertyKey: string) {
  console.log(
    `Decorator called on ${propertyKey} of ${target.constructor.name}`
  );
}

function withMana(target: any) {
  target.prototype.mana = 50;

  const originalIsOnCd = target.prototype.isOnCd;
  target.prototype.isOnCd = function (): boolean {
    console.log('My mana is currently:' + this.mana + '. This method got overridden by a decorator by the way');
    return this.mana === 0 && originalIsOnCd.call(this);
  };

  return target;
}

class decorated {
  @myDecorator
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @myDecorator
  method1() {
    console.log('Method 1');
  }

  @myDecorator
  method2() {
    console.log('Method 2');
  }

  @myDecorator
  method3() {
    console.log('Method 3');
  }
}

type Person = {
  name: string;
  age: number;
  address: string;
};

type ReadonlyPerson = {
  readonly [K in keyof Person]: Person[K];
};

const readOnlyPerson: ReadonlyPerson = { name: "John", age: 25, address: "123 Main St" };
// Properties of readOnlyPerson are now readonly

function printMileage(mileage: number | null | undefined) {
  console.log(`Mileage: ${mileage ?? 'Not Available'}`);
}