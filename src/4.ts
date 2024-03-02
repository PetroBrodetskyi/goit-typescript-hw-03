//У цьому завдання вам належить реалізувати сценарій життя, де людина, ключ і будинок взаємодіють один з одним.

class Key {
    private readonly signature: number = Math.random();

    getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected tenants: Person[] = [];

  constructor(protected key: Key, protected door: boolean = false) {}

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