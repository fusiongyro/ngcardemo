import {Wheel} from './wheel';
import {Vehicle} from './vehicle';
import {Saveable} from './saveable';
import {Memento} from './memento';

export class Wheels implements Saveable {
  vehicle: Vehicle;
  wheels: Wheel[];

  sizes = [14, 15, 16, 17, 18, 19, 20, 21, 22];
  ridiculousSize = 20;

  constructor(vehicle: Vehicle) {
    this.vehicle = vehicle;
    this.wheels = [new Wheel(this, 1), new Wheel(this, 2), new Wheel(this, 3), new Wheel(this, 4)];
  }

  get wheelSize(): number {
    return this.wheels[0].size;
  }

  set wheelSize(newSize: number) {
    this.wheels.forEach(w => w.size = newSize);
  }

  saveTo(memento: Memento) {
    this.wheels.forEach(w => w.saveTo(memento));
  }
}
