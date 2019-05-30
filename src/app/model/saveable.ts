import {Memento} from './memento';

export interface Saveable {
  saveTo(memento: Memento);
}
