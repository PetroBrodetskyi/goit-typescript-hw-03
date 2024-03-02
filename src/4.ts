//У цьому завдання вам належить реалізувати сценарій життя, де людина, ключ і будинок взаємодіють один з одним.

class Key {
    private readonly signature: number;

    constructor() {
    this.signature = Math.random();
  }

    getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log('Person entered the house.');
    } else {
      console.log('The door is closed. Cannot enter.');
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
  this.door = key.getSignature() === this.key.getSignature();
  console.log(this.door ? 'Door opened successfully.' : 'Invalid key. Door remains closed.');
}
}
    


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

//Door opened successfully
//Person entered the house.

export { };