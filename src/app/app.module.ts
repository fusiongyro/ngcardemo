import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VehicleComponentComponent } from './vehicle-component/vehicle-component.component';
import { WheelComponentComponent } from './wheel-component/wheel-component.component';
import { EngineComponentComponent } from './engine-component/engine-component.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { ModelComponentComponent } from './model-component/model-component.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponentComponent,
    WheelComponentComponent,
    EngineComponentComponent,
    ModelComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
