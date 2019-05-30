import {Component, Input, OnInit} from '@angular/core';
import {Wheels} from '../model/wheels';

@Component({
  selector: 'app-wheel-component',
  templateUrl: './wheel-component.component.html',
  styleUrls: ['./wheel-component.component.scss']
})
export class WheelComponentComponent implements OnInit {

  @Input() wheels: Wheels;

  // cars: 14 - 16
  // trucks: 17 - 20
  // truck + lift kit: 21 - 22

  constructor() { }

  ngOnInit() {
  }
}
