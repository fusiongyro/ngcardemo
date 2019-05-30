export class Memento {
  state: any;

  constructor() {
    this.state = {};
  }

  addField(field: string, value: string) {
    this.state[field] = value;
  }
}
