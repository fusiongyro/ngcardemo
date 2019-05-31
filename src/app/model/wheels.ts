import {Wheel} from './wheel';
import {Saveable} from './saveable';
import {Memento} from './memento';
import {FormFactor} from "./formfactor";
import {Model} from "./model";

export class Wheels implements Saveable {
  formFactor: FormFactor;
  wheels: Array<Wheel>;

  constructor(formFactor: FormFactor) {
    this.formFactor = formFactor;
    this.wheels = [new Wheel(this, 1, formFactor.minWheel),
                   new Wheel(this, 2, formFactor.minWheel),
                   new Wheel(this, 3, formFactor.minWheel),
                   new Wheel(this, 4, formFactor.minWheel)];
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

  modelChanged(newModel: Model) {
    this.formFactor = newModel.formFactor;
    this.wheelSize = newModel.formFactor.minWheel;
  }
}
