import {Component, Input, OnInit} from '@angular/core';
import {Engine} from '../model/engine';

@Component({
  selector: 'app-engine-component',
  templateUrl: './engine-component.component.html',
  styleUrls: ['./engine-component.component.scss']
})
export class EngineComponentComponent implements OnInit {

  @Input() engine: Engine;

  constructor() { }

  ngOnInit() {
  }

}
