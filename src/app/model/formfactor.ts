export class FormFactor {
  static SUV   = new FormFactor("Sport Utility Vehicle", 17, 20);
  static TRUCK = new FormFactor("Truck",                 17, 22);
  static SEDAN = new FormFactor("Sedan",                 14, 17);
  static VAN   = new FormFactor("Van",                   15, 18);
  static SPORT = new FormFactor("Sports car",            14, 18);
  
  name: string;
  minWheel: number;
  maxWheel: number;
  
  constructor(name: string, minWheel: number, maxWheel: number) {
    this.name     = name;
    this.minWheel = minWheel;
    this.maxWheel = maxWheel;
  }

  get validSizes() {
    let result = [];
    for (let i = this.minWheel; i < this.maxWheel; i++)
      result.push(i);
    return result;
  }
}
