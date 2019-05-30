import {Engine} from './engine';
import {Wheels} from './wheels';
import {Saveable} from './saveable';
import {Memento} from './memento';

export class Vehicle implements Saveable {
  make: string;
  model: string;
  year: number;
  wheels: Wheels;
  engine: Engine;
  DEFAULT_MAKE = 'Ford';
  DEFAULT_MODEL = 'Mustang GT';
  DEFAULT_YEAR = 2019;

  constructor() {
    this.engine = new Engine(this);
    this.wheels = new Wheels(this);
    this.make = this.DEFAULT_MAKE;
    this.model = this.DEFAULT_MODEL;
    this.year = this.DEFAULT_YEAR;
  }

  getValues() {
    const memento = new Memento();
    this.saveTo(memento);
    return memento.state;
  }

  saveTo(memento: Memento) {
    memento.addField('make', this.make);
    memento.addField('model', this.model);
    memento.addField('year', String(this.year));

    this.engine.saveTo(memento);
    this.wheels.saveTo(memento);
  }
}
