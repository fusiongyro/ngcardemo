import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '../model/vehicle';

@Component({
  selector: 'app-vehicle-component',
  templateUrl: './vehicle-component.component.html',
  styleUrls: ['./vehicle-component.component.scss']
})
export class VehicleComponentComponent implements OnInit {
  @Input() vehicle: Vehicle;

  constructor() { }

  ngOnInit() {
  }

}
