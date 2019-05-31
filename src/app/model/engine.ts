import {Vehicle} from './vehicle';
import {Saveable} from './saveable';
import {Memento} from './memento';
import {Model} from "./model";

export class Engine implements Saveable {
  vehicle: Vehicle;
  cylinders: number;

  cylindersAllowed = [3, 4, 6, 8, 12];

  constructor(vehicle: Vehicle) {
    this.vehicle = vehicle;
    this.cylinders = 4;
  }

  saveTo(memento: Memento) {
    memento.addField('cylinders', String(this.cylinders));
  }

  modelChanged(newModel: Model) {
    // nothing to do yet
  }
}
