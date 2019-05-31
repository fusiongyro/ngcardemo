import {Component, Input, OnInit} from '@angular/core';
import {Model} from "../model/model";
import {Vehicle} from "../model/vehicle";

@Component({
  selector: 'app-model-component',
  templateUrl: './model-component.component.html',
  styleUrls: ['./model-component.component.scss']
})
export class ModelComponentComponent implements OnInit {
  @Input() vehicle: Vehicle;

  constructor() { }

  get models() {
    return Object.values(Model.FORD_MODELS);
  }

  ngOnInit() {
  }

}
