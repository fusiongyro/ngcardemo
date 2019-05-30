import {Wheels} from './wheels';
import {Saveable} from './saveable';
import {Memento} from './memento';

export class Wheel implements Saveable {
  wheels: Wheels;
  size: number;
  id: number;

  constructor(wheels: Wheels, id: number) {
    this.wheels = wheels;
    this.id = id;
    this.size = 14;
  }

  saveTo(memento: Memento) {
    memento.addField('wheelSize-' + this.id, String(this.size));
  }
}
