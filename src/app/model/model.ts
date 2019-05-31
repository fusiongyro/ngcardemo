import {Saveable} from "./saveable";
import {Memento} from "./memento";
import {FormFactor} from "./formfactor";

export class Model implements Saveable {
  name: string;
  formFactor: FormFactor;

  static FORD_MODELS = {'EcoSport': new Model('EcoSport', FormFactor.SUV),
                 'Edge':     new Model('Edge',     FormFactor.SUV),
                 'Escape':   new Model('Escape',   FormFactor.SUV),
                 'F-150':    new Model('F-150',    FormFactor.TRUCK),
                 'F-250':    new Model('F-250',    FormFactor.TRUCK),
                 'Fiesta':   new Model('Fiesta',   FormFactor.SEDAN),
                 'Fusion':   new Model('Fusion',   FormFactor.SEDAN),
                 'Mustang':  new Model('Mustang',  FormFactor.SPORT)};

  static DEFAULT_MODEL = Model.FORD_MODELS['F-150'];

  constructor(name: string, formfactor: FormFactor) {
    this.name = name;
    this.formFactor = formfactor;
  }

  saveTo(memento: Memento) {
    memento.addField('model', this.name);
  }
}
