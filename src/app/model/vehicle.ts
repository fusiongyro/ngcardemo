import {Engine} from './engine';
import {Wheels} from './wheels';
import {Saveable} from './saveable';
import {Memento} from './memento';
import {Model} from "./model";

export class Vehicle implements Saveable {
  make: string;
  year: number;
  _model: Model;
  wheels: Wheels;
  engine: Engine;
  DEFAULT_MAKE = 'Ford';
  DEFAULT_YEAR = 2019;

  constructor() {
    this.make = this.DEFAULT_MAKE;
    this._model = Model.DEFAULT_MODEL;
    this.year = this.DEFAULT_YEAR;
    this.engine = new Engine(this);
    this.wheels = new Wheels(this.model.formFactor);
  }

  get model(): Model {
    return this._model;
  }

  set model(newModel: Model) {
    this._model = newModel;
    this.engine.modelChanged(newModel);
    this.wheels.modelChanged(newModel);
  }

  getValues() {
    const memento = new Memento();
    this.saveTo(memento);
    return memento.state;
  }

  saveTo(memento: Memento) {
    memento.addField('make', this.make);
    memento.addField('year', String(this.year));

    this.model.saveTo(memento);
    this.engine.saveTo(memento);
    this.wheels.saveTo(memento);
  }
}
