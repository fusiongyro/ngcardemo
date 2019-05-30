import { Component } from '@angular/core';
import {Vehicle} from './model/vehicle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'foo';
  vehicle = new Vehicle();
}
